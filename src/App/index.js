import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {
  // Col,
  Container
  // Row
}
  from 'reactstrap';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar';
import './App.scss';
import { getChannels } from '../helpers/data/channelsData';
import getUsers from '../helpers/data/usersData';
import Routes from '../helpers/data/Routes';
// import NavBar from './components/NavBar';
import { getMessages } from '../helpers/data/messagesData';

function App() {
  const [user, setUser] = useState(null);
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
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
          getMessages().then((resp) => console.warn(setMessages(resp)));
        }
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <Container fluid='true' className='App'>
       <Router>
         {/* <NavBar/> */}
           <SideBar
               user={user}
               channels={channels}
               usersArray={usersArray}
               setChannels={setChannels}
               />
           {/* <Row
           className='d-flex justify-content-center align-items-center w-100 mt-5'
           style={{ minHeight: '100%' }}
           noGutters
           > */}
             {/* <Col >
             </Col> */}
             {/* <Col xs={8}> */}
               <Routes
                  user={user}
                  usersArray={usersArray}
                  setUsersArray={setUsersArray}
                  messages={messages}
                  setMessages={setMessages}
                  setChannels={setChannels}
                />
             {/* </Col>
             <Col>
             </Col> */}
           {/* </Row> */}
        </Router>
      </Container>
    </>
  );
}

export default App;
