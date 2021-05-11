import React from 'react';
import PropTypes from 'prop-types';

import {
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../../helpers/auth';

function SideBar({ user }) {
  return (
    <div>
      <p>List Based</p>
      <Nav vertical>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Another Link</NavLink>
        </NavItem>
        <NavItem>
          <NavLink disabled href="#">Disabled Link</NavLink>
        </NavItem>
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
      </Nav>
      <hr />
      <p>Link based</p>
      <Nav vertical>
        <NavLink href="#">Link</NavLink> <NavLink href="#">Link</NavLink> <NavLink href="#">Another Link</NavLink> <NavLink disabled href="#">Disabled Link</NavLink>
      </Nav>
    </div>
  );
}

SideBar.propTypes = {
  user: PropTypes.any
};

export default SideBar;
