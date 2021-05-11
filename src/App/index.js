import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import SideBar from './components/SideBar';
import './App.scss';
import DirectMessage from '../views/DirectMessage';

function App() {
  const [user, setUser] = useState(null);

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
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
  <>
    <SideBar user={user}/>
    <DirectMessage/>
  </>
  );
}

export default App;
