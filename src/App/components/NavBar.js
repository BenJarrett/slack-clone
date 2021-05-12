import React from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar, NavItem
} from 'reactstrap';
import NSSLogo from '../../styles/images/NSS-Logo.png';

export default function NavBar() {
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <img src={NSSLogo} className="slack-logo" alt="Slack app logo"/>
         <NavItem>
          <Link className="nav-link" to="/dm">Add a Direct Message</Link>
        </NavItem>
      </Navbar>
    </div>
  );
}
