import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

function convUsers({ user, conversationUsers }) {
  return (
    <>
      {
        conversationUsers.map((item) => (
          item.senderID === user.uid || item.receiverID === user.uid
            ? <NavItem key={item.conversationUsersID}>
            <NavLink >
                 {
                    item.senderID === user.uid ? item.senderID : item.receiverID
                  }
            </NavLink>
          </NavItem>
            : ''
        ))
      }
    </>
  );
}

convUsers.propTypes = {
  user: PropTypes.any,
  conversationUsers: PropTypes.array
};

export default convUsers;
