import React, { useState } from 'react';
import {
  FormGroup, Input, Button, InputGroup, InputGroupAddon,
} from 'reactstrap';
import { createMessage } from '../../helpers/data/messagesData';

function MessagesForm() {
  const [message, setMessage] = useState({
    // text: message.text
  });
  const handleInputChange = (e) => {
    setMessage((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createMessage();
    console.warn(message);
  };
  return (
    <div>
    <FormGroup >
          <Input type="textarea" name="text" id="exampleText" />
     <InputGroup>
      <Input
        name="messsages"
        type="text"
        placeholder="Send a Message"
        // value={message.text}
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
  </div>
  );
}

export default MessagesForm;
