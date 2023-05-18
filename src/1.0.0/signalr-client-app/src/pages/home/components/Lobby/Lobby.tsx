import * as React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { ILobbyProps } from '.';

export const Lobby: React.FC<ILobbyProps> = ({joinRoom}) => {

    const user = React.useRef<any>();
    const room = React.useRef<any>();

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        joinRoom(user.current.value, room.current.value);
    };

    return <Form className='lobby' onSubmit={onSubmit}>
        <Form.Group>
            <Form.Control ref={user} placeholder='name' />
            <Form.Control ref={room} placeholder='room' />
        </Form.Group>
        <Button variant='success' type='submit' disabled={!user || !room}>Join</Button>
        <Container>
            
        </Container>
    </Form>;
}
