import React, { useState } from 'react';
import {
  FormGroup, Form, Label, Button, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
// import { getUsers } from './data/usersData';

const AddChannelForm = ({
  formTitle,
  usersArray,
  setUsersArray
}) => {
  const [chosenUser, setChosenUser] = useState('');
  // getUsers().then((response) => setUsersArray(response));

  const handleInputChange = (e) => {
    setChosenUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.prevent.Default();
    console.warn(chosenUser);
    console.warn(setUsersArray);
  };

  return (
    <>
      <div className='new-dm-form'>
        <Form id='newDMForm' autoComplete='off' >
          <h2 className='messages-header'>{formTitle}</h2>
          <FormGroup>
            <Label>Start a Channel</Label>
            <h4>Show the list of potential users for this Channel</h4>
            <Input value={chosenUser} onChange={handleInputChange} type="select" name="select" id="exampleSelect">
              {
                usersArray.map((item) => <option key={item.uid}>{item.fullName}</option>)
              }
            </Input>
          </FormGroup>
          <Button onClick={handleSubmit} color="success" type='submit'>Add Channel</Button>
        </Form>
      </div>
    </>
  );
};

AddChannelForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  usersArray: PropTypes.array.isRequired,
  setUsersArray: PropTypes.func.isRequired
};

export default AddChannelForm;
