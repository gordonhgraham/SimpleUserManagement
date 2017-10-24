import React from 'react'

function App(props) {
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>User Management Application</h1>
      <div>
        <h3>Users</h3>
        <ul>
          {props.users.map(user =>
            <li key={user.id}>First Name: {user.firstName}, Last Name: {user.lastName}, Address: {user.address}</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default App
