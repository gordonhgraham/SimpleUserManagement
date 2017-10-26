import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppContainer from './containers/AppContainer'
import UserActions from './data/UserActions'

// Needed for onTouchTap
injectTapEventPlugin();

// Populate w/ dummy data on load
UserActions.addUser({
  firstName: 'Gordon',
  lastName: 'Graham',
  address: '1175 Fourmile Canyon Drive Boulder, CO 80302',
})

ReactDOM.render(<AppContainer />, document.getElementById('root'))
