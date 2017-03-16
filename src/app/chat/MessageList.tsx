import * as React from 'react';
import { Message } from "messaging/Message";

export function MessageList(props: { messages: Message[] }) {
  return (
    <ul>
      {
        props.messages.map(message => {
          return <li key={message.id}>{message.text}</li>
        })
      }
    </ul>
  );
}