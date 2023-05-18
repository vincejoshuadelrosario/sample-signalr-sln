import { Message } from "../../../../models/Message";

export interface IChatProps
{
    session: { user: string, room: string };
    users: string[];
    messages: Message[];
    sendMessage: (message: string) => Promise<void>;
    closeConnection: () => Promise<void>;
}
