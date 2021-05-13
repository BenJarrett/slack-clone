import React from 'react';
import {
  FormGroup, Form, Label, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const DirectMessageForm = ({
  formTitle,
  user
}) => {
  console.warn(user);
  console.warn('I am in the DirectMessageForm form ');
  // const [potentialUsersArray, setUsersArray] = setState([]);
  // const [newDMMessage, setNewDMMessage] = setState({
  //   senderUID: user || null,
  //   receiverUID: null
  // });

  // const handleImputChange = (e) => {
  //   setNewDMMessage((prevState) => ({
  //     ...prevState,
  //     senderUID: user ? user.uid : '',
  //     receiverUID: usersArray.length > 0 ? usersArray[0].uid : '',
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   console.warn('handle submit');
  //   createNewDirectMessage(senderUID, receiverUID).then((Response) => setNewDMMessage(Response));
  //   setNewDMMessage({
  //     senderUID: null,
  //     receiverUID: null
  //   });
  // };

  // const getUsersList = (usersArray) => {
  //  <>
  //    {
  //      usersArray.map((arrayUser, key) => (
  //        <Item key={key}>
  //          <h5>{arrayUser.fullName}</h5>
  //        </Item>
  //      ))
  //    }
  //  </>
  // };

  const getUsersList = () => (
   <>
     {
      <h5>mapping users</h5>
     }
   </>
  );

  return (
    <>
      <div className='new-dm-form'>
        {/* <Form id='newDMForm' autoComplete='off' onSubmit={handleSubmit} > */}
        <Form id='newDMForm' autoComplete='off' >
          <h2 className='messages-header'>{formTitle}</h2>
          <FormGroup>
            <Label>Start a Direct message with</Label>
            <h4>Show the list of potential users to DM</h4>
            <h4>{getUsersList()}</h4>
          </FormGroup>
          <Button color="success" type='submit'>Add Direct Message</Button>
        </Form>
      </div>
    </>
  );
};

DirectMessageForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  user: PropTypes.any
};

export default DirectMessageForm;
