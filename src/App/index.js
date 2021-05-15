import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { Col, Container, Row } from 'reactstrap';
import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/SideBar';
import './App.scss';
import { getUsers, getConversationUsers } from '../helpers/data/usersData';
import { getChannels } from '../helpers/data/channelsData';
import Routes from '../helpers/data/Routes';
import NavBar from './components/NavBar';

function App() {
  const [user, setUser] = useState(null);
  const [channels, setChannels] = useState([]);
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
          getUsers().then((resp) => {
            setUsersArray(resp);
          });
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
      <Container fluid='true' className='App'>
       <Router>
         <NavBar/>
           <Row noGutters>
             <Col>
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
             <Col>
               <Routes
                  user={user}
                  channels={channels}
                  usersArray={usersArray}
                  setUsersArray={setUsersArray}
                  setChosenUser={setChosenUser}
                  chosenUser={chosenUser}
                  setConversationUsers={setConversationUsers}
                />
             </Col>
             <Col>
             </Col>
           </Row>
        </Router>
      </Container>
    </>
  );
}

export default App;
