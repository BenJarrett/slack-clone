import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Select from 'react-select';
import {
  FormGroup, Form, Label, Button, Input, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { createChannel } from '../../helpers/data/channelsData';

const AddChannelForm = ({
  formTitle,
  user,
  usersArray,
  setChannels
}) => {
  const [displayNames, setvalue] = useState([]);
  const [tempNames, setTempNames] = useState([]);
  const [channelObj, setChannelObj] = useState({
    channelName: '',
    isChannelPublic: false,
    creatorID: user ? user.uid : '',
  });
  const history = useHistory();
  let arrayOfUsersForNewChannel = [];
  const arrayOfUsersForNewChannel1 = [];
  const usersArrayMinusCurrentUser = usersArray.filter((currUser) => currUser.uid !== user.uid);

  const usersArryForMap = usersArrayMinusCurrentUser.map((item) => {
    const obj = { value: item.uid, label: item.fullName };
    return obj;
  });

  const handleInputChange = (e) => {
    setChannelObj((prevState) => ({
      ...prevState,
      [e.target.name]: (e.target.name !== 'isChannelPublic' ? e.target.value : e.target.checked)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tempNames.forEach((selectedUser) => {
      arrayOfUsersForNewChannel = usersArrayMinusCurrentUser.filter((currUser) => currUser.uid === selectedUser.value);
      if (selectedUser.value !== user.uid) {
        arrayOfUsersForNewChannel1.push(...arrayOfUsersForNewChannel);
      }
    });
    arrayOfUsersForNewChannel1.push(usersArray.filter((currUser) => currUser.uid === user.uid));
    createChannel(channelObj, arrayOfUsersForNewChannel1).then(setChannels);
    history.push('/add-Channel');
  };

  const handleSelectedUsers = (e) => {
    const extractUserObjectsFromE = e;
    setTempNames(extractUserObjectsFromE);
    setvalue(Array.isArray(e) ? e.map((x) => x.label) : []);
  };

  return (
    <>
      <div className='new-dm-form'>
        <Form id='newDMForm' autoComplete='off' >
          <h2 className='messages-header'>{formTitle}</h2>
          <FormGroup row>
            <Label sm={3}>Channel Name:</Label>
            <Col sm={9}>
            <Input
              name='channelName'
              id='channelName'
              type='text'
              placeholder='Please enter a Channel Name'
              value={channelObj.channelName}
              onChange={handleInputChange}
            />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={2}>Add Users</Label>
            <Col sm={10}>
              <Select isMulti options={usersArryForMap} onChange={handleSelectedUsers}> </Select>
            </Col>
          </FormGroup>
          <FormGroup row>
             <Label sm={6}>Is this Channel public?</Label>
             <Col sm={2}>
               <Input
                 name='isChannelPublic'
                 id='isChannelPublic'
                 type='checkbox'
                 value={channelObj.isChannelPublic}
                 onChange={handleInputChange}
                />
             </Col>
          </FormGroup>
          <Button
             onClick={handleSubmit}
             color="success"
             type='submit'>Add Channel
          </Button>
          <br></br>
          <FormGroup >
          <Label>Channel</Label>
          <center>
          <h4>
          <p>
          {channelObj.channelName ? `Your Channel name is: ${channelObj.channelName} \n` : ''}
          </p>
          <p>
          {channelObj.channelName ? `Your Channel Users are ${displayNames}` : '' }
          </p>
          <p>
          {channelObj.channelName ? `right now your channel is set as a ${channelObj.isChannelPublic ? 'Public' : 'Private'} channel` : ''}
          </p>
          </h4>
          </center>
          </FormGroup>

        </Form>
      </div>
    </>
  );
};

AddChannelForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  user: PropTypes.any,
  usersArray: PropTypes.array.isRequired,
  setChannels: PropTypes.func.isRequired
};

export default AddChannelForm;
