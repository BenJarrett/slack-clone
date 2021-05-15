import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getSingleUser } from './usersData';

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
        .then(() => {
          getConversations().then((directMessage) => resolve(directMessage));
        }).catch((error) => reject(error));
    });
});

const getUserConversation = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users.json/orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getDMuserInfo = (senderID) => new Promise((resolve, reject) => {
  const userInfo = getSingleUser(senderID);
  const directMessageUser = getUserConversation(senderID);

  Promise.all([userInfo, directMessageUser])
    .then(([userInfoResp, directMessageUserResp]) => resolve({ userInfo: userInfoResp, directMessageUser: directMessageUserResp }))
    .catch((error) => reject(error));
});

export { getConversations, createConversation, getDMuserInfo };
