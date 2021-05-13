import React from 'react';
import propTypes from 'prop-types';
import DirectMessageForm from '../helpers/directMessagesForm';

function AddDirectMessage({ user }) {
  return (
    <>
      <DirectMessageForm
        formTitle='Add a direct message'
        user={user}
      />
    </>
  );
}

AddDirectMessage.propTypes = {
  user: propTypes.func.isRequired
};

export default AddDirectMessage;
