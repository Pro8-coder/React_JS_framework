import React from 'react';
import './Message.css'; // Импорт файлов стилей

const Message = (props) => {
  return <div className="message">{props.text}</div>;
}

export default Message;
