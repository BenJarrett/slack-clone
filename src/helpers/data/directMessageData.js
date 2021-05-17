import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getSingleMessage } from './messagesData';
// import { getSingleMessage } from './messagesData';
// import { getSingleUser } from './usersData';

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

const getConversationMessages = (conversationUsersID) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/conversationMessages.json?orderBy="conversationUsersID"&equalTo="${conversationUsersID}"`)
    .then((response) => {
      if (response.data) {
        const convMessages = Object.values(response.data);
        const singleMessage = [];
        convMessages.forEach((item) => {
          getSingleMessage(item.messageID).then((resp) => {
            singleMessage.push(resp);
          });
        });
        Promise.all([convMessages, singleMessage])
          .then(([convMessagesResp, singleMessageResp]) => resolve({ convMessages: convMessagesResp, singleMessage: singleMessageResp }))
          .catch((error) => reject(error));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// const getAllConversationMessages = (conversationUsersID) => new Promise((resolve, reject) => {
//   const conversationMessages = getConversationMessages(conversationUsersID)
// })

export {
  getConversations, createConversation, getSingleConversation, getConversationMessages
};
