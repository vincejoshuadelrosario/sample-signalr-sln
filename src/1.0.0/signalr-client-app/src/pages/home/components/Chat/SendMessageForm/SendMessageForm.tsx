import * as React from 'react';
import { ISendMessageFormProps } from './';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { Send } from 'react-bootstrap-icons';

export const SendMessage: React.FC<ISendMessageFormProps> = ({sendMessage}) => {
    const [ message, setMessage ] = React.useState<string>('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage(message);
        setMessage('');
    }

    return <Form onSubmit={onSubmit}>
        <InputGroup>
            <Form.Control placeholder='message...'
                value={message}
                onChange={e => setMessage(e.target.value)} />
            <Button variant='primary'
                type='submit'
                disabled={!message}><Send /></Button>
        </InputGroup>
    </Form>;
}
