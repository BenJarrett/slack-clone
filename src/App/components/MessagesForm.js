import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, Input, Button, InputGroup, InputGroupAddon, Form,
} from 'reactstrap';
import { createMessage } from '../../helpers/data/messagesData';

const MessagesForm = ({
  // setMessages,
  user,
  messageID,
  // userUID,
  text,
}) => {
  const GetCurrentDate = () => {
    const getDateNow = new Date();
    const year = getDateNow.getFullYear();
    const month = (getDateNow.getMonth() + 1).toString().padStart(2, '0');
    const day = getDateNow.getDate().toString().padStart(2, '0');
    const hours = getDateNow.getHours().toString().padStart(2, '0');
    const minutes = getDateNow.getMinutes().toString().padStart(2, '0');
    const seconds = getDateNow.getSeconds().toString().padStart(2, '0');
    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
  };

  const [message, setMessage] = useState({
    messageID: messageID || '',
    userUID: user ? user.uid : '',
    text: text || '',
    timestamp: GetCurrentDate()
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
    // console.warn(GetCurrentDate());
    console.warn(message);
    createMessage(message);
    // .then((messagesArray) => setMessages(messagesArray));

    setMessage({
      messageID: '',
      userUID: '',
      text: '',
      timestamp: '',
    });
  };
  return (
  <div>
    <Form>
      <FormGroup id='message-form'>
            <Input type="textarea" name="text" id="exampleText" />
      <InputGroup>
        <Input
          name="text"
          type="text"
          placeholder="Send a Message"
          value={message.text}
          onChange={handleInputChange}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary"
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
  setMessages: PropTypes.func,
  user: PropTypes.any,
  userUID: PropTypes.any,
  messageID: PropTypes.string,
  text: PropTypes.string,
  // timestamp: PropTypes.string
};

export default MessagesForm;
