import { Message } from "../../../../models/Message";

export interface IChatProps
{
    messages: Message[];
    sendMessage: (message: string) => Promise<void>;
}
