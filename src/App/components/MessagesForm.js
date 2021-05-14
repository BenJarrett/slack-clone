import React from 'react';
import {
  FormGroup, Input, Button, InputGroup, InputGroupAddon,
} from 'reactstrap';

function MessagesForm() {
  return (
  <div>
    <FormGroup >
          <Input type="textarea" name="text" id="exampleText" />
     <InputGroup>
      <Input placeholder="Send a Message" />
        <InputGroupAddon addonType="append"><Button color="primary">Send</Button></InputGroupAddon>
      </InputGroup>
    </FormGroup>
  </div>
  );
}

export default MessagesForm;
