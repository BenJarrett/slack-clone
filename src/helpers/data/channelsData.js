import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { createChannelUsers } from './channelUsersData';

const dbURL = firebaseConfig.databaseURL;

const getChannels = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/channels.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
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
          getChannels().then(resolve);
        }).catch((error) => reject(error));
    });
});

const deleteChannel = (channelID) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/channels/${channelID}.json`)
    .then(() => getChannels().then((channelArray) => resolve(channelArray)))
    .catch((error) => reject(error));
});

export {
  getChannels, deleteChannel, createChannel
};
