import React from 'react';
import PropTypes from 'prop-types';

// import MessagesForm from '../App/components/MessagesForm';
import MessagesView from './MessagesView';

function Home({ setMessages, messages, user }) {
  return (
    <div>
     <h1>Welcome to Slack-Clone</h1>
     {<MessagesView
        messages={messages}
        setMessages={setMessages}
        user={user}
     />}
    </div>
  );
}
Home.propTypes = {
  setMessages: PropTypes.func,
  user: PropTypes.any,
  messages: PropTypes.array
};

export default Home;
