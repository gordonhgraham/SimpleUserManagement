import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import UserActions from '../data/UserActions'

const UserTile = ({ firstName, lastName, address, id }) => (
    <Card>
      <CardTitle title={`${firstName} ${lastName}`}/>
      <CardText>
        {address}
      </CardText>
      <CardActions>
        <FlatButton label="Edit User" onClick={() => UserActions.toggleInput(id)}/>
        <FlatButton label="Delete User" />
      </CardActions>
    </Card>
  )

export default UserTile
