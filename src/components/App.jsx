import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import UserTile from './UserTile.jsx'
import MenuBar from './MenuBar.jsx'

function App(props) {
  return (
    <MuiThemeProvider>
      <div>
        <h1 style={{textAlign: 'center', fontFamily: 'roboto'}}>User Management Application</h1>
        <div>
          <MenuBar />
            {[...props.users.values()].map(user =>
              <UserTile
                key={user.id}
                firstName={user.firstName}
                lastName={user.lastName}
                address={user.address}
              />
            )}
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export default App
