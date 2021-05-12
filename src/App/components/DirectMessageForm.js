import React from 'react';
import {
  Form, Input, FormGroup, Button
} from 'reactstrap';
import PropTypes from 'prop-types';

const DirectMessageForm = ({
  formTitle,
  user,
  usersArray
}) => {
  console.warn(user, usersArray, 'form view');

  return (
    <>
      <div className='new-dm-form'>
        <Form id='newDMForm' autoComplete='off'>
          <h3>{formTitle}</h3>
          <FormGroup>
             <Input type="select" name="select" id="exampleSelect">
              {
                usersArray.map((item, i) => <option key={i}>{item.fullName}</option>)
              }
        </Input>
          </FormGroup>
          <Button color="success" type='submit'>Start a conversation</Button>
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
