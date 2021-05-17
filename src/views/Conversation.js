import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Input } from 'reactstrap';
import { getConversationMessages } from '../helpers/data/directMessageData';
import { getSingleMessage } from '../helpers/data/messagesData';

function Conversation() {
  const conversationUsersID = useParams();
  useEffect(() => {
    console.warn('convID', conversationUsersID);
    getConversationMessages(conversationUsersID.firebaseKey).then((response) => {
      console.warn(response);
      response.forEach((item) => {
        getSingleMessage(item.messageID).then((messages) => console.warn(messages));
      });
    });
  }, []);

  return (
    <div>
      <h1>Conversation view</h1>
      <Input>
      </Input>
    </div>
  );
}

export default Conversation;
