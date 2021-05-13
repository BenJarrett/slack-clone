import React from 'react';
import PropTypes from 'prop-types';
import AddChannelForm from '../helpers/addChannelsForm';

function AddChannel({
  usersArray, setUsersArray
}) {
  return (
    <>
      <AddChannelForm
        formTitle='Add a Channel'
        usersArray={usersArray}
        setUsersArray={setUsersArray}
      />
    </>
  );
}

AddChannel.propTypes = {
  usersArray: PropTypes.array.isRequired,
  setUsersArray: PropTypes.func.isRequired
};

export default AddChannel;
