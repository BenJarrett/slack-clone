import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Nav, NavbarToggler, NavItem, NavLink, Button
} from 'reactstrap';
import NavBar from './NavBar';
import { signInUser, signOutUser } from '../../helpers/auth';

const handleClick = () => {

}
const getChannels = (channels) => (
  <>

    {
     channels.map((channelInfo, key) => (
       <NavItem key={key}
       firebaseKey={channelInfo.channelId}
       >
         <NavLink >{channelInfo.channelName}</NavLink>
         <Button color="danger" onClick={handleClick}> Delete Channel </Button>
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
        </NavItem>
        {user && getChannels(channels)}
      </Nav>
      <hr />
      <div className ="usersSideNav"></div>
      <h4>Names of Users</h4>
      <Nav vertical>
        <NavLink >Link</NavLink>
        <NavLink >Link</NavLink>
        <NavLink >Another Link</NavLink>
        <NavLink >Disabled Link</NavLink>
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
