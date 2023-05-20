import * as React from 'react';
import { IMessageContainerProps } from './';

export const MessageContainer: React.FC<IMessageContainerProps> = ({messages}) => {
    const messageRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (messageRef && messageRef.current) {
            const { scrollHeight, clientHeight } = messageRef.current;
            messageRef.current.scrollTo({
                left: 0,
                top: scrollHeight - clientHeight,
                behavior: 'smooth'
            });
        }
    });

    return <div ref={messageRef} className='message-container'>
        {messages.map((m, index) =>
            <div key={index} className='user-message'>
                <div className="message bg-primary">{m.message}</div>
                <div className="from-user">{m.user}</div>
            </div>
        )}
    </div>;
}
