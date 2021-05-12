import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json`)
    .then((respose) => resolve(Object.values(respose.data)))
    .catch((error) => reject(error));
});

export default getUsers;
