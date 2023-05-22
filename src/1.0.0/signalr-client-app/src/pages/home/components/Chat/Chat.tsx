import * as React from 'react';
import { IChatProps } from './';
import { MessageContainer } from './MessageContainer';
import { SendMessage } from './SendMessageForm';
import Button from 'react-bootstrap/Button';
import { ConnectedUsers } from './ConnectedUsers';

export const Chat: React.FC<IChatProps> = ({ session: { user, room }, users, messages, sendMessage, closeConnection }) => {

    return <div>
        <div className="leave-room">
            <Button variant='danger' onClick={() => closeConnection()}>Leave Room</Button>
        </div>
        <ConnectedUsers users={users} currentUser={user}/>
        <div className='chat'>
            <MessageContainer messages={messages} />
            <SendMessage sendMessage={sendMessage} />
        </div>
        <div className='room'>
            <h4 >Room: <strong>{room}</strong></h4>
        </div>
    </div>;
}
