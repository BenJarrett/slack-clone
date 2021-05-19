import React from 'react';
import PropTypes from 'prop-types';
import AddChannelForm from '../App/components/addChannelsForm';

function AddChannel({
  user, usersArray, setChannels
}) {
  return (
    <>
      <AddChannelForm
        formTitle='Add a Channel'
        user={user}
        usersArray={usersArray}
        setChannels={setChannels}
      />
    </>
  );
}

AddChannel.propTypes = {
  user: PropTypes.any,
  usersArray: PropTypes.array.isRequired,
  setChannels: PropTypes.func.isRequired
};

export default AddChannel;
