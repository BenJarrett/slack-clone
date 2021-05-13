import React, { useState } from 'react';
import {
  Form, Input, FormGroup, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createConversation } from '../../helpers/data/directMessageData';
// import Conversation from '../../views/Conversation';

const DirectMessageForm = ({
  formTitle,
  user,
  usersArray
}) => {
  const [chosenUser, setChosenUser] = useState('');

  const handleInputChange = (e) => {
    setChosenUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(chosenUser);
    const obj = {
      senderUID: user.fullName,
      receiverUID: chosenUser
    };
    createConversation(obj).then((response) => console.warn(response));
  };

  return (
    <>
      <div className='new-dm-form'>
        <Form id='newDMForm' autoComplete='off'>
          <h3>{formTitle}</h3>
          <FormGroup>
             <Input type="select" name="fullName" id="exampleSelect" value={chosenUser} onChange={handleInputChange}>
              {
                usersArray.map((item) => <option key={item.uid}>{item.fullName}</option>)
              }
        </Input>
          </FormGroup>
          <Button color="success" type='submit' onClick={handleSubmit}>Start a conversation</Button>
        </Form>
      </div>
    </>
  );
};

DirectMessageForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  usersArray: PropTypes.array,
  user: PropTypes.any
};

export default DirectMessageForm;
