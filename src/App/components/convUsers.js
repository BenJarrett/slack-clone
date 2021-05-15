import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

function ConvUsers({ usersArray, conversationUsers, user }) {
  console.warn('convUsers');
  const findUserName = (senderID) => {
    let person = '';
    usersArray.forEach((item) => {
      if (item.uid === senderID) {
        person = item.fullName;
        console.warn('person', person);
      }
    });
    return person;
  };

  return (
    <>
    {
      conversationUsers.map((item) => (
        item.senderID === user.uid || item.receiverID === user.uid
          ? <NavItem key={item.conversationUsersID}>
        <NavLink >
             {
              item.senderID === user.uid ? findUserName(item.receiverID) : findUserName(item.senderID)
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
  user: PropTypes.any,
  usersArray: PropTypes.array,
  conversationUsers: PropTypes.array
};
export default ConvUsers;
// <>

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
