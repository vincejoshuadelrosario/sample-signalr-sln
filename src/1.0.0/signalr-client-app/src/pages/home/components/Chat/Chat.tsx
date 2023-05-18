import * as React from 'react';
import { IChatProps } from './';
import { MessageContainer } from './MessageContainer';

export const Chat: React.FC<IChatProps> = ({messages}) => {

    return <div className='chat'>
        <MessageContainer messages={messages}/>
    </div>;
}
