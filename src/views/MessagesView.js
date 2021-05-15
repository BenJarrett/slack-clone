import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MessagesForm from '../App/components/MessagesForm';

import { getMessages } from '../helpers/data/messagesData';

function MessagesView({ user }) {
  const [messages, setMessages] = useState([]);

  getMessages(user).then((messagesArray) => setMessages(messagesArray));

  return (
    <>
    <MessagesForm/>

    {
      console.warn(messages)
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
  setMessages: PropTypes.array
};

export default MessagesView;
