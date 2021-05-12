import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import DirectMessage from '../views/DirectMessage';

function Routes({ user, usersArray }) {
  return (
    <>
    <Switch>
      <Route
      exact path='/direct-messages'
      component={() => <DirectMessage
      user={user}
      usersArray={usersArray}/>}
      />
    </Switch>
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  usersArray: PropTypes.array.isRequired
};

export default Routes;
