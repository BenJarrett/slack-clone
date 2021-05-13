import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getChannels = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/channels.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteChannel = (channelID) => new Promise((resolve, reject) => {
  axios.delete(`${dbURL}/channels/${channelID}.json`)
    .then(() => getChannels().then((channelArray) => resolve(channelArray)))
    .catch((error) => reject(error));
});
export { getChannels, deleteChannel };
