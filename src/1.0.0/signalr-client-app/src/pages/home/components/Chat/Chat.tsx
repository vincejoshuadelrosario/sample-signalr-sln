import * as React from 'react';
import { IChatProps } from './';
import { MessageContainer } from './MessageContainer';
import { SendMessage } from './SendMessageForm';

export const Chat: React.FC<IChatProps> = ({messages, sendMessage}) => {

    return <div className='chat'>
        <MessageContainer messages={messages} />
        <SendMessage sendMessage={sendMessage} />
    </div>;
}
