import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getConversations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/directMessages.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createConversation = (dmObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/directMessages.json`, dmObj)
    .then((response) => {
      const body = { directMessageID: response.data.name };
      axios.patch(`${dbUrl}/directMessages/${response.data.name}.json`, body)
        .then(() => {
          getConversations().then((directMessage) => resolve(directMessage));
        }).catch((error) => reject(error));
    });
});

export { getConversations, createConversation };
