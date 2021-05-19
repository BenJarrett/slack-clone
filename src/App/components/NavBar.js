import React from 'react';
import {
  Navbar
} from 'reactstrap';
import NSSLogo from '../../styles/images/NSS-Logo.png';

export default function NavBar() {
  return (
    <div className='nav-container' >
      <Navbar color="faded" light expand="md">
        <img src={NSSLogo} className="slack-logo" alt="Slack app logo"/>
        <h1>Welcome to Slack-Clone</h1>
      </Navbar>
    </div>
  );
}
