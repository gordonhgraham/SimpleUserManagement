import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppContainer from './containers/AppContainer'

// Needed for onTouchTap
injectTapEventPlugin();

ReactDOM.render(<AppContainer />, document.getElementById('root'))

import UserActions from './data/UserActions'

// Populate w/ dummy data on load
UserActions.addUser({firstName: 'Gordon', lastName: 'Graham', address: 'Canyon',})
UserActions.addUser({firstName: 'Yonathan', lastName: 'Nuta', address: 'City',})
UserActions.addUser({firstName: 'Dog', lastName: 'Baby', address: 'Both',})
