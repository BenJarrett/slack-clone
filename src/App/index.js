import React, { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Col, Container, Row } from 'reactstrap';
import SideBar from './components/SideBar';
import getChannels from '../helpers/data/channelsData';
import getUsers from '../helpers/data/usersData';
import MessagesView from '../views/MessagesView';
import NavBar from './components/NavBar';

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
    <Container fluid='true' className='App'>
      <NavBar/>
    <Row noGutters>
      <Col>
      <SideBar
          user={user}
          channels={channels}
          usersArray={usersArray}
          />
      </Col>
      <Col>
      <MessagesView
        className='messagesContainer'
        user={user}
        />
      </Col>
    </Row>

    </Container>
  </>
  );
}

export default App;
