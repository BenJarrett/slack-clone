import React from 'react';
import PropTypes from 'prop-types';
import DirectMessageForm from '../App/components/DirectMessageForm';

function DirectMessage({
  user, usersArray, chosenUser, setChosenUser, setConversationUsers
}) {
  return (
    <div>
      <h1>Direct Message</h1>
      <DirectMessageForm
      chosenUser={chosenUser}
      setChosenUser={setChosenUser}
      user={user}
      formTitle='Find a teammate'
      usersArray={usersArray}
      setConversationUsers={setConversationUsers}
      />
    </div>
  );
}

DirectMessage.propTypes = {
  user: PropTypes.any,
  usersArray: PropTypes.array.isRequired,
  chosenUser: PropTypes.object,
  setChosenUser: PropTypes.func,
  setConversationUsers: PropTypes.func
};

export default DirectMessage;
