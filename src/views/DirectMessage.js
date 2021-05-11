import React, { useState, useEffect } from 'react';
import getDirectMessages from '../helpers/data/directMessageData';

function DirectMessage() {
  const [directMessages, setDirectMessages] = useState({});

  useEffect(() => {
    getDirectMessages().then((response) => {
      console.warn(response);
      setDirectMessages(response);
      console.warn('dm', directMessages);
    });
  }, []);

  return (
    <div>
      <p>Hello</p>
    </div>
  );
}

export default DirectMessage;
