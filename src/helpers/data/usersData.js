import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbURL = firebaseConfig.databaseURL;

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleUser = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users/${firebaseKey}.json`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

const getConversationUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/conversationUsers.json`)
    .then((response) => {
      // Object.values(response.data).map((item) => {
      //   const obj = {
      //     receiverID: getSingleUser(item.senderID),
      //     senderID: getSingleUser(item.receiverID)
      //   };
      //   return obj;
      // });
      resolve(response);
    })
    .catch((error) => reject(error));
});

export { getUsers, getConversationUsers, getSingleUser };
