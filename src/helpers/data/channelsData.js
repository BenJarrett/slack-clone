import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getChannels = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/channels.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getChannels;
