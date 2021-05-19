import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getConversations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/conversationUsers.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createConversation = (dmObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/conversationUsers.json`, dmObj)
    .then((response) => {
      const body = { conversationUsersID: response.data.name };
      axios.patch(`${dbUrl}/conversationUsers/${response.data.name}.json`, body)
        .then((resp) => {
          if (resp.data) {
            resolve(Object.values(resp.data));
          } else {
            resolve([]);
          }
        }).catch((error) => reject(error));
    });
});

const getSingleConversation = (ID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/conversationUsers/${ID}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getConversations, createConversation, getSingleConversation
};
