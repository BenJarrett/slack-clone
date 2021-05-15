import React from 'react';
import {
  Form, Input, FormGroup, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createConversation } from '../../helpers/data/directMessageData';
import { getConversationUsers } from '../../helpers/data/usersData';

const DirectMessageForm = ({
  formTitle,
  user,
  usersArray,
  chosenUser,
  setChosenUser,
  setConversationUsers
}) => {
  const handleInputChange = (e) => {
    console.warn(e.target.value);
    const arrValue = usersArray.find(({ fullName }) => fullName === e.target.value);
    console.warn('arrValue', arrValue);
    setChosenUser(arrValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn('chosenUser', chosenUser);
    const obj = {
      senderUID: user.uid,
      receiverUID: chosenUser.uid
    };
    createConversation(obj).then(() => getConversationUsers().then((response) => setConversationUsers(response)));
  };

  return (
    <>
      <div className='new-dm-form'>
        <Form id='newDMForm' autoComplete='off'>
          <h3>{formTitle}</h3>
          <FormGroup>
             <Input type="select" name="fullName" id="exampleSelect" value={chosenUser.fullName} onChange={handleInputChange}>
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
  user: PropTypes.any,
  chosenUser: PropTypes.object.isRequired,
  setChosenUser: PropTypes.func.isRequired,
  setConversationUsers: PropTypes.func
};

export default DirectMessageForm;
