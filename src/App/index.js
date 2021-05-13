import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { SideBar } from './components/SideBar';
import './App.scss';
import { getChannels } from '../helpers/data/channelsData';
import getUsers from '../helpers/data/usersData';

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
    <SideBar
      user={user}
      channels={channels}
      usersArray={usersArray}
    />
  </>
  );
}

export default App;
