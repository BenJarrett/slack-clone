import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getMessages = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/messages.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createMessage = (msgObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/messages.json`, msgObj)
    .then((response) => {
      const body = { messageID: response.data.name };
      axios.patch(`${dbURL}/messages/${response.data.name}.json`, body)
        .then(() => {
          getMessages().then((message) => resolve(message));
        });
    }).catch((error) => reject(error));
});

export { getMessages, createMessage };
