import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import UserTile from './UserTile'
import MenuBar from './MenuBar'
import InputModal from './InputModal'

function App(props) {
  return (
    <MuiThemeProvider>
      <div>
        <h1 style={{textAlign: 'center', fontFamily: 'roboto'}}>User Management Application</h1>
        <div>
          <InputModal title="Add New User" {...props} />
          <MenuBar />
            {[...props.users.values()].map(user =>
              <UserTile
                key={user.id}
                id={user.id}
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
