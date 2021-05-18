import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMessages } from '../helpers/data/messagesData';
import MessageBubble from './MessageBubble';
import MessagesForm from '../App/components/MessagesForm';

function viewChannelMessages({
  setMessages, user, timestamp, text
}) {
  const [convMessages, setConvMessages] = useState([]);
  const { firebaseKey } = useParams();

  useEffect(() => {
    getMessages(firebaseKey).then((response) => setConvMessages(response));
  }, []);

  return (
    <div>
      <MessageBubble
      messages={convMessages}
      />
      <MessagesForm
       setMessages={setMessages}
       user={user}
       text={text}
       communicationID={firebaseKey}
       timestamp={timestamp}
       />
    </div>
  );
}

viewChannelMessages.propTypes = {
  timestamp: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.any,
  setMessages: PropTypes.func
};

export default viewChannelMessages;
