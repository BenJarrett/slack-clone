import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getMessages from '../../helpers/data/messagesData';

function MessagesView({ user }) {
  const [messages, setMessages] = useState([]);

  getMessages(user).then((messagesArray) => setMessages(messagesArray));

  return (
    <>
    <div>
    {
      messages.map((messageObject) => (
        <div key={messageObject.messageID}>
          {messageObject.text}
          {messageObject.timeStamp}
        </div>
      ))
    }
    </div>
    </>
  );
}

MessagesView.propTypes = {
  user: PropTypes.any
};

export default MessagesView;
