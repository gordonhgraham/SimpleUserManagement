import React from 'react'
import { Card, CardActions, CardText, CardTitle, } from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import UserActions from '../data/UserActions'

const UserTile = ({ address, firstName, id, lastName, }) => (
    <Card>
      <CardTitle title={`${firstName} ${lastName}`}/>
      <CardText>
        {address}
      </CardText>
      <CardActions>
        <FlatButton label="Edit User" onClick={() => UserActions.startInput(id)} />
        <FlatButton label="Delete User" onClick={() => UserActions.deleteUser(id)} />
      </CardActions>
    </Card>
  )

export default UserTile
