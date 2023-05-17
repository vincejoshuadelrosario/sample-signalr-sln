import * as React from 'react';
import Lobby from './components/Lobby';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const Home: React.FC = () => {
    const [ connection, setConnection ] = React.useState<HubConnection>();

    const joinRoom = async (user: string, room: string) => {
        console.log(`$user: ${user} | room: ${room}`);
        try {
            const connection = new HubConnectionBuilder()
                .withUrl("https://localhost:44317/chat")
                .configureLogging(LogLevel.Information)
                .build();

                connection.on("ReceiveMessage", (user, message) => {
                console.log('message received', message);
            });

            await connection.start();
            await connection.invoke("JoinRoom", {user, room});
            setConnection(connection);
        } catch (e) {
            console.error(e);
        }
    };

    return <div className='app'>
        <h2>MyChat</h2>
        <hr className='line' />
        <Lobby joinRoom={joinRoom} />
    </div>;
}

export default Home;