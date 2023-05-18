using Microsoft.AspNetCore.SignalR;
using signalr_server_api.Models;

namespace signalr_server_api.Hubs
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

        public override Task OnDisconnectedAsync(Exception? exception)
        {
            if (_connections.TryGetValue(Context.ConnectionId, out UserConnection? userConnection))
            {
                _connections.Remove(Context.ConnectionId);
                Clients.Group(userConnection.Room)
                    .SendAsync("ReceiveMessage", _botUser,
                        $"{userConnection.User} has left the room");
            }

            return base.OnDisconnectedAsync(exception);
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
