import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
import AddChannel from '../../views/AddChannel';
import DirectMessage from '../../views/DirectMessage';
import Conversation from '../../views/Conversation';

export default function Routes({
  user, usersArray, setChosenUser, chosenUser, setConversationUsers, setChannels,
}) {
  return (
    <div>
      <Switch>
         <Route
           exact
           path='/'
           component={Home}
          />
         <Route
          exact path='/direct-messages'
          component={() => <DirectMessage
          chosenUser={chosenUser}
          setChosenUser={setChosenUser}
          user={user}
          usersArray={usersArray}
          setConversationUsers={setConversationUsers}/>}
         />
         <Route
         exact path='/direct-messages/:firebaseKey'
         component={() => <Conversation/>}
         />
         <Route
           exact
           path='/add-Channel'
           component={() => <AddChannel
                              user={user}
                              usersArray={usersArray}
                              setChannels={setChannels}
                            /> }
           />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  usersArray: PropTypes.array.isRequired,
  setUsersArray: PropTypes.func,
  chosenUser: PropTypes.object,
  setChosenUser: PropTypes.func,
  setConversationUsers: PropTypes.func,
  setChannels: PropTypes.func.isRequired
};
