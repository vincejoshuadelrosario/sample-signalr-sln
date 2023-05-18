import { Message } from "../../../../models/Message";

export interface IChatProps
{
    messages: Message[];
    sendMessage: (message: Message) => Promise<void>;
}
