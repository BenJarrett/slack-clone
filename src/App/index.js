import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import {
  Col,
  // Container,
  Row
}
  from 'reactstrap';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar';
import './App.scss';
import { getUsers, getConversationUsers } from '../helpers/data/usersData';
import { getChannels } from '../helpers/data/channelsData';
import Routes from '../helpers/data/Routes';
import NavBar from './components/NavBar';
// import { getMessages } from '../helpers/data/messagesData';

function App() {
  const [user, setUser] = useState(null);
  const [channels, setChannels] = useState([]);
  const [messages, setMessages] = useState([]);
  const [usersArray, setUsersArray] = useState([]);
  const [conversationUsers, setConversationUsers] = useState([]);
  const [chosenUser, setChosenUser] = useState({});
  const [chosenUserArray, setChosenUserArray] = useState([]);

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
          // getMessages('').then((resp) => setMessages(resp));
          getConversationUsers().then((resp) => {
            setConversationUsers(resp);
          });
        }
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      <NavBar/>
      {/* <Container fluid='true' className='App'> */}
       <Router>
           <Row
           noGutters
           >
             <Col
             xs='3'
             >
               <SideBar
                  user={user}
                  channels={channels}
                  chosenUser={chosenUser}
                  conversationUsers={conversationUsers}
                  usersArray={usersArray}
                  chosenUserArray={chosenUserArray}
                  setChosenUserArray={setChosenUserArray}
                  setChannels={setChannels}
                   />
             </Col>
             <Col
              // className={'messagesViewContainer'}
             >
               <Routes
                  user={user}
                  usersArray={usersArray}
                  setUsersArray={setUsersArray}
                  messages={messages}
                  setMessages={setMessages}
                  setChosenUser={setChosenUser}
                  chosenUser={chosenUser}
                  setConversationUsers={setConversationUsers}
                  setChannels={setChannels}
                />
             </Col>
             {/* <Col xs='1'></Col> */}
           </Row>
        </Router>
      {/* </Container> */}
    </>
  );
}

export default App;
