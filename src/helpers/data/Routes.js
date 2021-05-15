import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
import AddChannel from '../../views/AddChannel';
import DirectMessage from '../../views/DirectMessage';

export default function Routes({
  user, channels, usersArray, setUsersArray, setMessages
}) {
  return (
    <div>
      <Switch>
         <Route
           exact path='/'
           component={() => <Home
            setMessages={setMessages}
            user={user}
            usersArray={usersArray}/>}
          />
         <Route
          exact path='/direct-messages'
          component={() => <DirectMessage
          user={user}
          usersArray={usersArray}/>}
         />
         <Route
           exact
           path='/add-Channel'
           component={() => <AddChannel
                              channels={channels}
                              usersArray={usersArray}
                              setUsersArray={setUsersArray}
                            /> }
           />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  channels: PropTypes.array.isRequired,
  usersArray: PropTypes.array.isRequired,
  setUsersArray: PropTypes.func.isRequired,
  setMessages: PropTypes.func.isRequired
};
