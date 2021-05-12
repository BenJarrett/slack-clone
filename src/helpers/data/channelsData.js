import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getChannels = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/channels.json`)
    .then((respose) => resolve(Object.values(respose.data)))
    .catch((error) => reject(error));
});

// const deleteChannel = ()
export default getChannels;
