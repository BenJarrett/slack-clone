import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
import AddDirectMessage from '../../views/AddDirectMessage';
// import DirectMessageForm from '../directMessagesForm';

export default function Routes({
  user, channels, usersArray
}) {
  console.warn(channels, usersArray);
  return (
    <div>
      <Switch>
         <Route
           exact
           path='/'
           component={Home} />
         <Route
           exact
           path='dm'
           component={() => <AddDirectMessage
                                user={user}
                             />}
           />
         <Route />
         {/* <Route
            path='add-directMessage'
            component={() => (<DirectMessageForm
                               formTitle='Add a direct message'
                               user={user}
                              />)}
           />
         <Route /> */}
         <Route />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  channels: PropTypes.array.isRequired,
  usersArray: PropTypes.array.isRequired
};
