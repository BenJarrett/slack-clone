import React from 'react';
import {
  Form, Input, FormGroup, Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createConversation } from '../../helpers/data/directMessageData';

const DirectMessageForm = ({
  formTitle,
  user,
  usersArray,
  chosenUser,
  setChosenUser
}) => {
  // const [chosenUser, setChosenUser] = useState(usersArray[0]);
  // Have to set chosenUser to first item of array bc it is the one that appears in the dropdown first. Otherwise, the inputChange does not set ChosenUser.;

  const handleInputChange = (e) => {
    console.warn(e.target.value);
    const arrValue = usersArray.find(({ fullName }) => fullName === e.target.value);
    console.warn(arrValue);
    setChosenUser(arrValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.warn(chosenUser);
    const obj = {
      senderUID: user.uid,
      receiverUID: chosenUser.uid
    };
    createConversation(obj).then((response) => console.warn(response));
    setChosenUser(usersArray[0]);
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
  user: PropTypes.any,
  chosenUser: PropTypes.object,
  setChosenUser: PropTypes.func
};

export default DirectMessageForm;
