import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
import AddChannel from '../../views/AddChannel';
import DirectMessage from '../../views/DirectMessage';

export default function Routes({
  user, usersArray, setChannels,
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
          user={user}
          usersArray={usersArray}/>}
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
  setChannels: PropTypes.func.isRequired
};
