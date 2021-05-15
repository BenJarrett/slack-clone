import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const createChannelUsers = (channelUserObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/channelUsers.json`, channelUserObject)
    .then((response) => {
      const body = { channelUsersID: response.data.name };
      axios.patch(`${dbURL}/channelUsers/${response.data.name}.json`, body)
        .catch((error) => reject(error));
    });
});

export default createChannelUsers;
