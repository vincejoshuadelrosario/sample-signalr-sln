export interface ILobbyProps
{
    joinRoom: (user: string, room: string) => Promise<void>;
}
