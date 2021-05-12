import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getDirectMessageUsers = () => new Promise((resolve, reject) => {
  axios(`${dbUrl}/directMessageUsers.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export default getDirectMessageUsers;
