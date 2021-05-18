import React from 'react';
import PropTypes from 'prop-types';
// import { View, Text } from 'reactstrap';
import MessagesForm from '../App/components/MessagesForm';
import MessageBubble from './MessageBubble';

function MessagesView({
  user,
  usersArray,
  setMessages,
  userUID,
  text,
  timestamp,
  messages
  // message
}) {
  return (
    <>
    <div>
        <MessageBubble
          messages={messages}
          user={user}
        />
          <MessagesForm
         className={'msgFormStyle'}
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
  // message: PropTypes.object,
  user: PropTypes.any,
  usersArray: PropTypes.array,
  setMessages: PropTypes.func,
  userUID: PropTypes.string,
  messageID: PropTypes.string,
  text: PropTypes.string,
  timestamp: PropTypes.instanceOf(Date)
};

export default MessagesView;
