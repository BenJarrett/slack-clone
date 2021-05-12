import React from 'react';
import PropTypes from 'prop-types';
import DirectMessageForm from '../App/components/DirectMessageForm';

function DirectMessage({ user, usersArray }) {
  return (
    <div>
      <h1>Direct Message</h1>
      <DirectMessageForm
      user={user}
      formTitle='Find a teammate'
      UsersArray={usersArray}
      />
    </div>
  );
}

DirectMessage.propTypes = {
  user: PropTypes.any,
  usersArray: PropTypes.array
};

export default DirectMessage;
