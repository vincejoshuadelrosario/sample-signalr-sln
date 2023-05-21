import * as React from 'react';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Message } from '../../models/Message';
import { Lobby } from './components/Lobby';
import { Chat } from './components/Chat';

export const Home: React.FC = () => {
    const [ connection, setConnection ] = React.useState<HubConnection | null>();
    const [ messages, setMessages ] = React.useState<Message[]>([]);
    const [ session, setSession ] = React.useState<{user: string, room: string}>({user: '', room: ''});
    const [ users, setUsers ] = React.useState<string[]>([]);

    const joinRoom = async (user: string, room: string) => {
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:44317/chat")
                .configureLogging(LogLevel.Information)
                .build();

            connection.on("UsersInRoom", users => {
                setUsers(users);
            });

            connection.on("ReceiveMessage", (user, message) => {
                setMessages(messages => [...messages, {user, message}]);
            });

            connection.onclose(e => {
                setConnection(null);
                setMessages([]);
                setUsers([]);
            });

            await connection.start();
            await connection.invoke("JoinRoom", {user, room});
            setConnection(connection);
            setSession({user, room});
        } catch (e) {
            console.error(e);
        }
    };

    const closeConnection = async () => {
        try {
            if (connection) {
                await connection.stop();
            }

        } catch (e) {
            console.error(e);
        }
    };

    const sendMessage = async (message: string) => {
        try {
            await connection?.invoke("SendMessage", message);
        } catch (e) {
            console.error(e);
        }
    };

    return <div className='app'>
        <h2>MyChat</h2>
        <hr className='line' />
        {
            !connection
            ? <Lobby joinRoom={joinRoom} />
            : <Chat session={{ ...session }} users={users} messages={messages} sendMessage={sendMessage} closeConnection={closeConnection} />
        }
    </div>;
}
