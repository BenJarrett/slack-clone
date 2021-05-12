import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SideBar from './components/SideBar';
import './App.scss';
import getChannels from '../helpers/data/channelsData';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  const [channels, setChannels] = useState([]);

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
        if (authed !== null) {
          getChannels().then((resp) => setChannels(resp));
        }
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  // debugger;
  return (
  <>
    {/* <NavBar user={user} /> */}
    <SideBar
      user={user}
      channels={channels}
    />
  </>
  );
}

export default App;
