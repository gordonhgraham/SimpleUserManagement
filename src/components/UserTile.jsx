import React from 'react';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const UserTile = ({ firstName, lastName, address, }) => (
    <Card>
      <CardTitle title={`${firstName} ${lastName}`}/>
      <CardText>
        {address}
      </CardText>
      <CardActions>
        <FlatButton label="Edit User" />
        <FlatButton label="Delete User" />
      </CardActions>
    </Card>
  )

export default UserTile
