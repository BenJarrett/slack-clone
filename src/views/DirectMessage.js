import React, { useState, useEffect } from 'react';
import getDirectMessages from '../helpers/data/directMessageData';
import getDirectMessageUsers from '../helpers/data/userData';

function DirectMessage() {
  const [directMessages, setDirectMessages] = useState({});
  const [directMessageUsers, setDirectMessageUsers] = useState({});

  useEffect(() => {
    getDirectMessages().then((response) => {
      console.warn(response);
      setDirectMessages(response);
      console.warn('dm', directMessages);
    });

    getDirectMessageUsers().then((response) => {
      console.warn(response);
      setDirectMessageUsers(response);
      console.warn('dmu', directMessageUsers);
    });
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default DirectMessage;
