import React from 'react';
import PropTypes from 'prop-types';
// import { View, Text } from 'reactstrap';
import MessageBubble from './MessageBubble';
import MessagesForm from '../App/components/MessagesForm';
import '../App/App.scss';

function MessagesView({
  user,
  usersArray,
  setMessages,
  userUID,
  text,
  timestamp,
  messages,
}) {
  return (
    <>
    <div>
        <MessageBubble
          setMessages={setMessages}
          messages={messages}
        />
          <MessagesForm
          className={'msgFormStyle'}
          messages={messages}
          setMessages={setMessages}
          user={user}
          usersArray={usersArray}
          userUID={userUID}
          text={text}
          timestamp={timestamp}
         />
       </div>
      </>
  );
}

MessagesView.propTypes = {
  messages: PropTypes.array,
  user: PropTypes.any,
  usersArray: PropTypes.array,
  setMessages: PropTypes.func,
  userUID: PropTypes.string,
  messageID: PropTypes.string,
  text: PropTypes.string,
  timestamp: PropTypes.string
};

export default MessagesView;
