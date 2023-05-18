using Microsoft.AspNetCore.SignalR;
using siglnalr_server_api.Models;

namespace siglnalr_server_api.Hubs
{
    public class ChatHub : Hub
    {
        private readonly string _botUser;
        private readonly IDictionary<string, UserConnection> _connections;

        public ChatHub(IDictionary<string, UserConnection> connections)
        {
            _botUser = "MyChat Bot";
            _connections = connections;
        }

        public async Task JoinRoom(UserConnection userConnection)
        {
            //await Clients.All.SendAsync("ReceiveMessage",
            //    _botUser,
            //    $"{userConnection.User} has joined {userConnection.Room}");

            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);

            _connections[Context.ConnectionId] = userConnection;

            await Clients.Group(userConnection.Room)
                    .SendAsync("ReceiveMessage", _botUser,
                        //$"{userConnection.User} has joined {userConnection.Room}");
                        $"{userConnection.User} has joined the room");
        }

        public async Task SendMessage(string message)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection? userConnection))
            {
                await Clients.Group(userConnection.Room)
                    .SendAsync("ReceiveMessage", userConnection.User, message);
            }
        }
    }
}
