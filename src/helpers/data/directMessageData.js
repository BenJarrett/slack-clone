import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getSingleUser } from './usersData';

const dbUrl = firebaseConfig.databaseURL;

const getConversations = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/conversations.json`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createConversation = (dmObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/conversations.json`, dmObj)
    .then((response) => {
      const body = { conversationUsersID: response.data.name };
      axios.patch(`${dbUrl}/conversations/${response.data.name}.json`, body)
        .then(() => {
          getConversations().then((directMessage) => resolve(directMessage));
        }).catch((error) => reject(error));
    });
});

const getUserConversation = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/conversationUsers`)
})

const getDMuserInfo = (senderID) => {
  const userInfo = getSingleUser(senderID);
  const 
}

export { getConversations, createConversation };
