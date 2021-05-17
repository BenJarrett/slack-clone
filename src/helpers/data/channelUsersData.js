import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const createChannelUsers = (channelUserObject) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/channelUsers.json`, channelUserObject)
    .then((response) => {
      const body = { channelUsersID: response.data.name };
      axios.patch(`${dbURL}/channelUsers/${response.data.name}.json`, body)
        .then(() => resolve())
        .catch((error) => reject(error));
    });
});

const getChannelUsers = (channelID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/channelUsers.json?orderBy="channelID"&equalTo="${channelID}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteChannelUsers = (channelID) => new Promise((resolve, reject) => {
  getChannelUsers(channelID).then((response) => {
    response.forEach((channelUser) => {
      axios.delete(`${dbURL}/channelUsers/${channelUser.channelUsersID}.json`)
        .catch((error) => reject(error));
    });
  });
});

// const deleteChannelUsers = (channelID) => new Promise((resolve, reject) => {
//   axios.delete(`${dbURL}/channelUsers.json?orderBy="channelID"&equalTo="${channelID}"`)
//     .catch((error) => reject(error));
// });

export { createChannelUsers, deleteChannelUsers };
