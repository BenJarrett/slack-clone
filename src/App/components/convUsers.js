import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

function ConvUsers({ usersArray, conversationUsers, user }) {
  let tempSender = {};
  let tempReceiver = {};
  const conversationUsersAll = [];
  const filteredConvserstionUsersAll = [];
  conversationUsers.forEach((userID) => {
    tempSender = usersArray.find(({ uid }) => uid === userID.senderUID);
    tempReceiver = usersArray.find(({ uid }) => uid === userID.receiverUID);

    if (tempSender && tempReceiver) {
      const obj = {
        sender: { ...tempSender },
        receiver: { ...tempReceiver }
      };
      conversationUsersAll.push(obj);

      if (tempSender.uid !== user.uid) {
        filteredConvserstionUsersAll.push(tempSender);
      } else if (tempReceiver.uid !== user.uid) {
        filteredConvserstionUsersAll.push(tempReceiver);
      }
    }
  });

  return (
    <>
    {
      <div>
          {
            filteredConvserstionUsersAll !== []
              ? filteredConvserstionUsersAll.map((item) => (
              <NavItem key={item.uid}>
                <NavLink >
                {item.fullName}
              </NavLink>
              </NavItem>
              ))
              : ''
          }
      </div>
    }
    </>
  );
}

ConvUsers.propTypes = {
  user: PropTypes.any,
  usersArray: PropTypes.array,
  conversationUsers: PropTypes.array
};
export default ConvUsers;
