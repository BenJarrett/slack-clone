import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import {
  Collapse, Navbar, NavbarToggler, Nav, NavItem, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';
import NSSLogo from '../../styles/images/NSS-Logo.png';
// import SideBar from './SideBar';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        {/* <Link className="nav-link" to="/add-Player">Add Player</Link> */}
        <p>Item</p>
      </NavItem>
      <NavItem>
        {/* <Link className="nav-link" to="/players">Players Cards</Link> */}
        <p>Item</p>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="faded" light toggable expand="md">
        {/* <Link className="navbar-brand" to="/">React</Link> */}
        <img src={NSSLogo} className="slack-logo" alt="Slack app logo"/>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {user && authenticated()}
            <NavItem>
               {
                  user !== null
                  && <NavItem>
                     {
                       user
                         ? <Button color='secondary' onClick={signOutUser}>Sign out Add</Button>
                         : <Button color='info' onClick={signInUser}>Sign In Delete</Button>
                     }
                     </NavItem>
               }
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
