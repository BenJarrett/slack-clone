import React from 'react';
import PropTypes from 'prop-types';
import MessagesView from './MessagesView';

function Home({ setMessages, messages, user }) {
  return (
    <div>
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
