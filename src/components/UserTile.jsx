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
        <FlatButton label="Edit User" onClick={() => {UserActions.editUser(id, {firstName: 'FirstName', lastName: 'LastName', address})}} />
        {/* may need to move edit user to save button in modal, this should open modal w/ user to edit data */}
        <FlatButton label="Delete User" onClick={() => UserActions.deleteUser(id)} />
      </CardActions>
    </Card>
  )

export default UserTile
