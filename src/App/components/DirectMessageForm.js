import React from 'react';
import {
  Form, Input, FormGroup, Button, Label
} from 'reactstrap';
import PropTypes from 'prop-types';
// import getUsers from '../../helpers/data/usersData';

const DirectMessageForm = ({
  formTitle,
  user,
  usersArray
}) => {
  console.warn(user);

  // useEffect(() => {
  //   getUsers().then((response) => {
  //     setUsersArray(response);
  //     console.warn(response);
  //   });
  // }, []);

  return (
    <>
      <div className='new-dm-form'>
        {/* <Form id='newDMForm' autoComplete='off' onSubmit={handleSubmit} > */}
        <Form id='newDMForm' autoComplete='off' >
          <h2>{formTitle}</h2>
          <FormGroup>
            <Label>Start a Direct message with</Label>
             <Input type="select" name="select" id="exampleSelect">
              {
                usersArray.map((item, i) => <option key={i}>{item}</option>)
              }
          <option>5</option>
        </Input>
          </FormGroup>
          <Button color="success" type='submit'>Add Direct Message</Button>
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
