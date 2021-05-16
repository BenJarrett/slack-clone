import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../../views/Home';
import AddChannel from '../../views/AddChannel';
import DirectMessage from '../../views/DirectMessage';

export default function Routes({
  user, usersArray, messages, setMessages, setChannels,
}) {
  return (
    <div>
      <Switch>
         <Route
           exact path='/'
           component={() => <Home
            messages={messages}
            setMessages={setMessages}
            user={user}
            usersArray={usersArray}
            />}
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
  setUsersArray: PropTypes.func.isRequired,
  messages: PropTypes.array,
  setMessages: PropTypes.func.isRequired,
  setChannels: PropTypes.func.isRequired
};
