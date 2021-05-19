import React from 'react';
import PropTypes from 'prop-types';
import MessagesView from './MessagesView';

function Home({
  setMessages, messages, user, message
}) {
  return (
    <div>
     {<MessagesView
        messages={messages}
        message={message}
        setMessages={setMessages}
        user={user}
     />}
    </div>
  );
}
Home.propTypes = {
  setMessages: PropTypes.func,
  user: PropTypes.any,
  messages: PropTypes.array,
  message: PropTypes.object
};

export default Home;
