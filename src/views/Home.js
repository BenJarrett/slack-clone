import React from 'react';
import PropTypes from 'prop-types';
import MessagesView from './MessagesView';

function Home({
  setMessages, messages, user, message
}) {
  return (
    <div>
        <h1>Welcome to Slack-Clone</h1>
     {<MessagesView
    className={'messagesViewContainer'}

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
