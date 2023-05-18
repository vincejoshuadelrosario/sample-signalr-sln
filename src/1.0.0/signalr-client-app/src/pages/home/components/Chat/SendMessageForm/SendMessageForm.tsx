import * as React from 'react';
import { ISendMessageFormProps } from './';
import { Button, Form, FormControl, InputGroup } from 'react-bootstrap';

export const SendMessage: React.FC<ISendMessageFormProps> = ({sendMessage}) => {
    const [ message, setMessage ] = React.useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    };

    return <Form onSubmit={onSubmit}>
        <InputGroup>
            <FormControl placeholder='message...'
                value={message}
                onChange={e => setMessage(e.target.value)} />
            <Button variant='primary'
                type='submit'
                disabled={!message}>Button</Button>
        </InputGroup>
    </Form>;
}
