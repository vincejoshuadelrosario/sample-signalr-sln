using Microsoft.AspNetCore.SignalR;
using siglnalr_server_api.Models;

namespace siglnalr_server_api.Hubs
{
    public class ChatHub : Hub
    {
        private readonly string _botUser;

        public ChatHub()
        {
            _botUser = "MyChat Bot";
        }

        public async Task JoinRoom(UserConnection userConnection)
        {
            //await Clients.All.SendAsync("ReceiveMessage",
            //    _botUser,
            //    $"{userConnection.User} has joined {userConnection.Room}");

            await Groups.AddToGroupAsync(Context.ConnectionId, userConnection.Room);

            await Clients.Group(userConnection.Room).SendAsync("ReceiveMessage", _botUser,
                    $"{userConnection.User} has joined {userConnection.Room}");
        }
    }
}
