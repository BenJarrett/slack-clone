import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Nav, NavbarToggler, NavItem, NavLink, Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';
import { deleteChannel } from '../../helpers/data/channelsData';

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

function SideBar({
  user, channels, usersArray, setChannels
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const getChannelLinks = () => {
    const handleButtonClick = (channelID) => {
      deleteChannel(channelID).then(setChannels);
    };
    return (
      <>
        {
          channels.map((channelInfo) => (
            <NavItem key={channelInfo.channelID}>
              <NavLink >{channelInfo.channelName}
               <Button style={{
                 backgroundColor: 'transparent',
                 borderWidth: '0rem'
               } }
                 onClick={() => (handleButtonClick(channelInfo.channelID))}>
                 <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="black"
                    className="bi bi-trash"
                    viewBox="0 0 16 16">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </svg>
               </Button>
              </NavLink>
            </NavItem>))
        }
      </>
    );
  };
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
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="/add-Channel">Add Channels</Link>
        </NavItem>
        {user && getChannelLinks()}
      </Nav>
      <hr />
      <div className ="usersSideNav"></div>
      <NavItem>
        <Link className="nav-link" to="/direct-messages">Add Direct Message</Link>
      </NavItem>
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
  usersArray: PropTypes.array,
  setChannels: PropTypes.func
};

export default SideBar;
