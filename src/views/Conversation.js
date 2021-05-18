import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MessageBubble from './MessageBubble';
import MessagesForm from '../App/components/MessagesForm';
import { getMessages } from '../helpers/data/messagesData';

// import { Input } from 'reactstrap';
// import { getConversationMessages } from '../helpers/data/directMessageData';

function Conversation({
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
      communicationID={firebaseKey}
      user={user}
      setMessages={setMessages}
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

Conversation.propTypes = {
  timestamp: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.any,
  setMessages: PropTypes.func
};

export default Conversation;
