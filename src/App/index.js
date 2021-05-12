import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar';
import './App.scss';
import getChannels from '../helpers/data/channelsData';
import { getUsers } from '../helpers/data/usersData';
import Routes from '../helpers/data/Routes';

function App() {
  const [user, setUser] = useState(null);
  const [channels, setChannels] = useState([]);
  const [usersArray, setUsersArray] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObj = {
          fullName: authed.displayName,
          profilePicture: authed.photoURL,
          uid: authed.uid,
          email: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
        setChannels(channels);
        setUsersArray(usersArray);
        if (authed !== null) {
          getChannels().then((resp) => setChannels(resp));
          getUsers().then((resp) => setUsersArray(resp));
        }
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
  <>
    <Router>
      <SideBar
        user={user}
        channels={channels}
        usersArray={usersArray}
      />
      <Routes
        user={user}
        channels={channels}
        usersArray={usersArray}
      />
    </Router>
  </>
  );
}

export default App;
