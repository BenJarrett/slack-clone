import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MessagesView from './MessagesView';
import { getChannelMessages } from '../helpers/data/messagesData';

function MessageViewChoice({ messages, user }) {
  const [channelMessages, SetChannelMessages] = useState([]);
  const { firebaseKey } = useParams();

  useEffect(() => {
    getChannelMessages(firebaseKey).then(SetChannelMessages);
  }, []);

  return (
    <div>
     {<MessagesView
        messages={messages}
        setMessages={channelMessages}
        user={user}
        channelID={firebaseKey}
     />}
    {firebaseKey}
    </div>
  );
}
MessageViewChoice.propTypes = {
  setMessages: PropTypes.func,
  user: PropTypes.any,
  messages: PropTypes.array
};

export default MessageViewChoice;
