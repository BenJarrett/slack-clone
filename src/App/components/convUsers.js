import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

function ConvUsers({ conversationUsers, user }) {
  return (
    <>
    {
      conversationUsers.map((item) => (
        item.senderID === user.uid || item.receiverID === user.uid
          ? <NavItem key={item.conversationUsersID}>
        <NavLink >
             {
               item.senderID === user.uid ? item.receiverID : item.senderID
              }
        </NavLink>
      </NavItem>
          : ''
      ))
      }
    </>

  );
}

ConvUsers.propTypes = {
  conversationUsers: PropTypes.array.isRequired,
  usersArray: PropTypes.array,
  setUsersArray: PropTypes.func,
  user: PropTypes.any
};
export default ConvUsers;

// let arrayOfUsersForDM = [];
// const arrayOfUsersForDM1 = [];

// const gabbyisPissed = (usersArray1) => {
//   conversationUsers.forEach((conversation) => {
//     arrayOfUsersForDM = usersArray1.filter((currUser) => (currUser.uid === conversation.receiverID || currUser.uid === conversation.senderID));
//     arrayOfUsersForDM1.push(arrayOfUsersForDM);
//   });
//   console.warn(arrayOfUsersForDM1);
//   setUsersArray(arrayOfUsersForDM1);
//   debugger;
// };

//   gabbyisPissed(usersArray);
//   return (
//     <>
//      {
//        arrayOfUsersForDM1.map((item) => (
//            <NavItem key={item.uid}>
//              <NavLink>
//                {
//                  item.fullName
//                }
//              </NavLink>
//            </NavItem>
//        ))
//      }
//     </>
//   );
// }
