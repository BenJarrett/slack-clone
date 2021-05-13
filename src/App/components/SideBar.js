import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Nav, NavbarToggler, NavItem, NavLink, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

const getChannels = (channels) => (
  <>
    {
     channels.map((channelInfo, key) => (
       <NavItem key={key}>
         <NavLink >{channelInfo.channelName}</NavLink>
       </NavItem>
     ))
    }
  </>
);

const getUsers = (usersArray) => (
  <>
    {
      usersArray.map((user) => (
        <NavItem key={user.uid}>
          <NavLink >{user.fullName}</NavLink>
        </NavItem>
      ))
    }
  </>
);

function SideBar({ user, channels, usersArray }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
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
        </NavItem>
        {user && getChannels(channels)}
      </Nav>
      <hr />
      <div className ="usersSideNav"></div>
      <h4>Names of Users</h4>
      <Nav vertical>
         {user && getUsers(usersArray)}
      </Nav>
    </div>
  </>
  );
}

SideBar.propTypes = {
  user: PropTypes.any,
  channels: PropTypes.array,
  usersArray: PropTypes.array
};

export default SideBar;
