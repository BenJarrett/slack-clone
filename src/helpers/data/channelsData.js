import axios from 'axios';
import firebaseConfig from '../apiKeys';
import createChannelUsers from './channelUsersData';

const dbURL = firebaseConfig.databaseURL;

const getChannels = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/channels.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const createChannel = (channelObj, channelUsers) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/channels.json`, channelObj)
    .then((response) => {
      const body = { channelID: response.data.name };
      axios.patch(`${dbURL}/channels/${response.data.name}.json`, body)
        .then(() => {
          channelUsers.forEach((channelUser) => {
            const obj = { userUID: channelUser.uid, channelID: response.data.name };
            createChannelUsers(obj);
          });
          getChannels().then((message) => resolve(message));
        }).catch((error) => reject(error));
    });
});

export { getChannels, createChannel };
