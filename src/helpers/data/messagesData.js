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

const createChannelMessage = (channelMessageObj) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/channelMessages.json`, channelMessageObj)
    .then((response) => {
      const body = { channelMessageID: response.data.name };
      axios.patch(`${dbURL}/channelMessages/${response.data.name}.json`, body);
    })
    .then(() => resolve())
    .catch((error) => reject(error));
});

const createMessage = (msgObj, channelID) => new Promise((resolve, reject) => {
  axios.post(`${dbURL}/messages.json`, msgObj)
    .then((response) => {
      const body = { messageID: response.data.name };
      axios.patch(`${dbURL}/messages/${response.data.name}.json`, body)
        .then(() => {
          const channelMessageObj = {
            messageID: response.data.name,
            channelID,
          };
          createChannelMessage(channelMessageObj);
          getMessages().then((message) => resolve(message));
        });
    }).catch((error) => reject(error));
});

const getSingleMessage = (messageID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/messages.json?orderBy="messageID"&equalTo="${messageID}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getChannelMessages = (channelID) => new Promise((resolve, reject) => {
  axios.get(`${dbURL}/channelMessages.json?orderBy="channelID"&equalTo="${channelID}"`)
    .then((response) => {
      if (response) {
        const channelMessages = Object.values(response.data);
        const messages = [];
        channelMessages.forEach((channelMessage) => {
          getSingleMessage(channelMessage.messageID).then((messageResponse) => messages.push(messageResponse));
        });
        resolve(messages);
      } else {
        resolve([]);
      }
    }).catch((error) => reject((error)));
});

export {
  getMessages, createMessage, getChannelMessages
};
