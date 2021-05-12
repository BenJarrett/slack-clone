import React from 'react';
// import React, { useEffect, useState } from 'react';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import propTypes from 'prop-types';
import DirectMessageForm from '../helpers/directMessagesForm';

function AddDirectMessage({ user }) {
  console.warn('I am in the AddDirectMessage view ');
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((authed) => {
  //     if (authed) {
  //       const userInfoObject = {
  //         fullName: authed.displayName,
  //         profileImage: authed.photoURL,
  //         uid: authed.uid,
  //         user: authed.email.split('@')[0]
  //       };
  //       setUser(userInfoObject);
  //     } else if (user || user === null) {
  //       setUser(false);
  //     }
  //   });
  // }, []);

  return (
    <>
    <div>
     <h1>I am in the DM view</h1>
    </div>
      <DirectMessageForm
        formTitle='Add a direct message'
        user={user}
      />
    </>
  );
}

AddDirectMessage.propTypes = {
  user: propTypes.func.isRequired
};

export default AddDirectMessage;
