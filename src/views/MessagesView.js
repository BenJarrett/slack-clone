import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getMessages from '../helpers/data/messagesData';

function MessagesView({ user }) {
  const [messages, setMessages] = useState([]);

  getMessages(user).then((messagesArray) => setMessages(messagesArray));

  return (
    <>
    {
      messages.map((messageObject) => (
        <div key={messageObject.messageID}>
          <h3>hello</h3>
          {messageObject.text}
          {messageObject.timeStamp}
        </div>
      ))
    }
    </>
  );
}

MessagesView.propTypes = {
  user: PropTypes.any
};

export default MessagesView;
