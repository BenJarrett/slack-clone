import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getDirectMessageUsers = () => {
  axios(`${dbUrl}/directMessageUsers.json`)
    .then((response) => {

    })
};
