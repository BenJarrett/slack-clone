import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input } from 'reactstrap';
import MessagesForm from '../App/components/MessagesForm';

function MessagesView({
  user,
  usersArray,
  setMessages,
  userUID,
  text,
  timestamp,
  messages
  // message
}) {
  // getMessages(user).then((messagesArray));
  // getMessages(user).then((messagesArray) => setMessages(messagesArray));
  return (
    <>
      <div className='messages-container'>
        <h3>hello</h3>
        {messages.map((msgObj) => (
              <Form key={msgObj.messageID}>
                <FormGroup>
                  <Input type="textarea" name="text" id="exampleText"/>
                    {`${msgObj.text} ${msgObj.timestamp}`}
                </FormGroup>
              </Form>
        ))}
        {<MessagesForm
        setMessages={setMessages}
        user={user}
        usersArray={usersArray}
        userUID={userUID}
        text={text}
        timestamp={timestamp}
      />}
      </div>
    </>
  );
}

MessagesView.propTypes = {
  messages: PropTypes.array,
  // message: PropTypes.object,
  user: PropTypes.any,
  usersArray: PropTypes.array,
  setMessages: PropTypes.func,
  userUID: PropTypes.string,
  messageID: PropTypes.string,
  text: PropTypes.string,
  timestamp: PropTypes.instanceOf(Date)
};

export default MessagesView;
