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

    // (setEditMessage((prevState) => console.warn(!prevState)));
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
          // alignSelf: 'flex-end',
          // borderRadius: 20,
        }}>
            <div style={{ fontSize: 16, color: '#fff' }} >{msgObj.text}</div>
            <div style={{ fontSize: 12, color: '#fff' }} >{msgObj.timestamp}</div>
          <Button color='danger'onClick={() => handleClick('edit')}>
            {editMessage ? 'close' : 'edit'}
          </Button>
          {
          editMessage && <MessagesForm
            setMessages={setMessages}
            messageID={msgObj.messageID}
            // user={user}
            text={msgObj.text}
          />}
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
