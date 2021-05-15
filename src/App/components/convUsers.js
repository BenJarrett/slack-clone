import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavLink } from 'reactstrap';

function ConvUsers({ chosenUser }) {
  return (
    <>
    <NavItem key={chosenUser.uid}>
      <NavLink>
        {chosenUser.fullName}
      </NavLink>
    </NavItem>
    </>
  );
}

ConvUsers.propTypes = {
  chosenUser: PropTypes.object
};
export default ConvUsers;
// <>
// {
//   conversationUsers.map((item) => (
//     item.senderID === user.uid || item.receiverID === user.uid
//       ? <NavItem key={item.conversationUsersID}>
//     <NavLink >
//          {
//            item.senderID === user.uid ? item.receiverID : item.senderID
//           }
//     </NavLink>
//   </NavItem>
//       : ''
//   ))
//   }

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
