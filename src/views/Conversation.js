import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { Input } from 'reactstrap';
import { getConversationMessages } from '../helpers/data/directMessageData';
// import MessageBubble from './MessageBubble';

function Conversation() {
  const [convMessages, setConvMessages] = useState([]);
  const { firebaseKey } = useParams();

  useEffect(() => {
    console.warn('convID', firebaseKey);
    getConversationMessages(firebaseKey).then((response) => {
      console.warn('getConversationMessages', response);
      setConvMessages(response.singleMessage);
    });
  }, []);

  return (
    <div>
      <h1>Conversation view</h1>
      {/* <MessageBubble
      messages={convMessages} */}
      {/* /> */}
      {console.warn(convMessages)}
    </div>
  );
}

export default Conversation;
