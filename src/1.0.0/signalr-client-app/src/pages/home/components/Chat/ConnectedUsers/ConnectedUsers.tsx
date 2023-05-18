import * as React from 'react';
import { IConnectedUsersProps } from './IConnectedUsersProps';
import { CaretRightFill } from 'react-bootstrap-icons';

export const ConnectedUsers: React.FC<IConnectedUsersProps> = ({ users, currentUser }) => {

return <div className='user-list'>
        <h4>Connected Users</h4>
        <div>
            {users.map((u, index) => <h6 key={index}>{(u === currentUser) ? <CaretRightFill color='red'/> : ''} {u}</h6>)}
        </div>
    </div>;
}
