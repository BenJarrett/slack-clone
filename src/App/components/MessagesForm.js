import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Input, Button, InputGroup, InputGroupAddon, Form,
} from 'reactstrap';
import { createMessage, getMessages } from '../../helpers/data/messagesData';

const MessagesForm = ({
  setMessages,
  user,
  messageID,
  text,
  communicationID
}) => {
  const GetCurrentDate = () => {
    const getDateNow = new Date();
    const year = getDateNow.getFullYear();
    const month = (getDateNow.getMonth() + 1).toString().padStart(2, '0');
    const day = getDateNow.getDate().toString().padStart(2, '0');
    const hours = getDateNow.getHours().toString().padStart(2, '0');
    const minutes = getDateNow.getMinutes().toString().padStart(2, '0');
    const seconds = getDateNow.getSeconds().toString().padStart(2, '0');
    const fullDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    const splitDateTime = fullDateTime.split(' ');
    const timeOnly = splitDateTime[[1]];
    return timeOnly;
  };

  const [message, setMessage] = useState({
    messageID: messageID || '',
    userUID: user ? user.uid : '',
    text: text || '',
    timestamp: GetCurrentDate(),
    communicationID: communicationID || null
  });

  const handleInputChange = (e) => {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage((prevState) => ({
      ...prevState,
      timestamp: GetCurrentDate()
    }));
    createMessage(message, communicationID)
      .then(() => getMessages(communicationID).then((response) => setMessages(response)));
    // .then((messagesArray) => setMessages(messagesArray));

    setMessage({
      messageID: null,
      userUID: '',
      text: '',
      timestamp: '',
    });
  };
  return (
  <div>
    <Form id='message-form'>
      <FormGroup >
      <InputGroup>
        <Input
          name="text"
          type="text"
          placeholder="Send a Message"
          value={message.text}
          onChange={handleInputChange}
          />
          <InputGroupAddon addonType="append">
            <Button color="success"
            onClick={handleSubmit}
            >Send
          </Button>
          </InputGroupAddon>
        </InputGroup>
      </FormGroup>
    </Form>
  </div>
  );
};

MessagesForm.propTypes = {
  message: PropTypes.object,
  setMessages: PropTypes.func,
  user: PropTypes.any,
  userUID: PropTypes.any,
  messageID: PropTypes.string,
  text: PropTypes.string,
  communicationID: PropTypes.string
};

export default MessagesForm;
