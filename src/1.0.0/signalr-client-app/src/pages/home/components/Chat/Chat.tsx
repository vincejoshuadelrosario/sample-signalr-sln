import * as React from 'react';
import { IChatProps } from './';
import { MessageContainer } from './MessageContainer';
import { SendMessage } from './SendMessageForm';
import Button from 'react-bootstrap/Button';

export const Chat: React.FC<IChatProps> = ({ session: { user, room }, messages, sendMessage, closeConnection }) => {

    return <div>
        <div className='session'>
            <label htmlFor='user'>User: </label>
            <span id='user'><strong>{user}</strong></span><br />
            <label htmlFor='room'>Room: </label>
            <span id='room'><strong>{room}</strong></span>
        </div>
        <div className="leave-room">
            <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
        </div>
        <div className='chat'>
            <MessageContainer messages={messages} />
            <SendMessage sendMessage={sendMessage} />
        </div>
    </div>;
}
