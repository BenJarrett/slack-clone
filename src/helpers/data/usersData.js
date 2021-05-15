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
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getChosenUser = (fullName) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/users.json?orderBy="fullName"&equalTo="${fullName}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getUsers, getConversationUsers, getSingleUser, getChosenUser
};
