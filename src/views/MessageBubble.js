import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import MessagesForm from '../App/components/MessagesForm';
// import { rightArrow, rightArrowOverlap } from '../styles/index.scss';

function MessageBubble({
  messages, setMessages
}) {
  const [editMessage, setEditMessage] = useState(false);

  const handleClick = (type) => {
    // switch (type) {
    //   case 'edit':
    //     setEditMessage((prevState) => !prevState);
    //     break;
    //   default:
    //     console.warn('nothing selected');
    // }
    if (type === 'edit') {
      setEditMessage((prevState) => !prevState);
    } else {
      console.warn('nothing selected');
    }
  };

  return (
    <>
      {messages.map((msgObj, i) => (
        <div key={i} style={{
          backgroundColor: '#0078fe',
          padding: 10,
          marginLeft: '45%',
          borderRadius: 5,
          marginTop: 5,
          marginRight: '5%',
          maxWidth: '50%',
          alignSelf: 'flex-end',
          // borderRadius: 20,
        }}>
            <div style={{ fontSize: 16, color: '#fff' }} >{msgObj.text}</div>
            <div style={{ fontSize: 12, color: '#fff' }} >{msgObj.timestamp}</div>
          {
          editMessage && <MessagesForm
            setMessages={setMessages}
            messageID={msgObj.messageID}
            // user={user}
            text={msgObj.text}
          />}
          <Button
            color='transparent'
            onClick={() => handleClick('edit')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
          </svg>
          </Button>
        </div>
      ))}
    </>
  );
}

MessageBubble.propTypes = {
  setMessages: PropTypes.func,
  messages: PropTypes.array,
  editMessage: PropTypes.bool
};

export default MessageBubble;
