import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
import AddDirectMessage from '../../views/AddDirectMessage';
// import AddChannelForm from '../addChannelsForm';
import AddChannel from '../../views/AddChannel';

export default function Routes({
  user, channels, usersArray, setUsersArray
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
           exact
           path='/dm'
           component={() => <AddDirectMessage
                              user={user}
                            /> }
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
  setUsersArray: PropTypes.func.isRequired
};
