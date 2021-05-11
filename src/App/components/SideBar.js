import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Nav, NavbarToggler, NavItem, NavLink, Button
} from 'reactstrap';
import NavBar from './NavBar';
import { signInUser, signOutUser } from '../../helpers/auth';

const getChannels = (channels) => (
  <>
    {
     channels.map((channelInfo, key) => (
       <NavItem key={key}>
         <NavLink href="#" >{channelInfo.channelName}</NavLink>
       </NavItem>
     ))}
  </>
);

function SideBar({ user, channels }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div><NavBar></NavBar></div>
    <div className ="channelsSideNav">
      <Nav vertical >
        <NavbarToggler onClick={toggle} />
        <NavItem>
        {
          user !== null
          && <div>
            {
              user
                ? <Button color='danger' onClick={signOutUser}>SIGN OUT</Button>
                : <Button color='info' onClick={signInUser}>SIGN IN</Button>
            }
          </div>
        }
      <h4>Channels</h4>
        {user && getChannels(channels)}
        </NavItem>
      </Nav>
      <hr />
      <div className ="usersSideNav"></div>
      <h4>Names of Users</h4>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
  </>
  );
}

SideBar.propTypes = {
  user: PropTypes.any,
  channels: PropTypes.array
};

export default SideBar;
