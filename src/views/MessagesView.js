import React from 'react';
import PropTypes from 'prop-types';
import MessagesForm from '../App/components/MessagesForm';

// import { getMessages } from '../helpers/data/messagesData';

function MessagesView({
  user, usersArray, setMessages, userUID, text, timestamp
}) {
// getMessages(user).then((messagesArray) => setMessages(messagesArray));

  // console.warn(setMessages(messages));
  return (
    <>
    {<MessagesForm
      setMessages={setMessages}
      user={user}
      usersArray={usersArray}
      userUID={userUID}
      text={text}
      timestamp={timestamp}
    />}

    {
      // messages.map((messageObject) => (
      //   <div key={messageObject.messageID}>
      //     <h3>hello</h3>
      //     {messageObject.text}
      //     {messageObject.timeStamp}
      //   </div>
      // ))
    }
    </>
  );
}

MessagesView.propTypes = {
  user: PropTypes.any,
  usersArray: PropTypes.array,
  setMessages: PropTypes.func,
  userUID: PropTypes.string,
  messageID: PropTypes.string,
  text: PropTypes.string,
  timestamp: PropTypes.instanceOf(Date)
};

export default MessagesView;
