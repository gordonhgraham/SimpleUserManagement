import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import UserActions from '../data/UserActions'

export default class InputUserModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      id: '',
      firstName: '',
      lastName: '',
      address: '',
    }
    this.initState = {
      open: false,
      id: '',
      firstName: '',
      lastName: '',
      address: '',
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleSave = () => {
    // action to save user in flux store
    UserActions.addUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
    })

    // reset component state
    this.setState(this.initState)
  }

  handleCancel = () => {
    // reset component state
    this.setState(this.initState)
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={false}
        onClick={this.handleCancel}
      />,
      <FlatButton
        label="Save"
        primary={true}
        onClick={this.handleSave}
      />,
    ]

    return (
      <div>
        <RaisedButton label="TEST" onClick={this.handleOpen} />
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <TextField
            floatingLabelText="First Name"
            id="firstName"
            defaultValue={this.state.firstName}
            onChange={(e, v) => this.setState({firstName: v})}
          />{" "}
          <TextField
            floatingLabelText="Last Name"
            id="lastName"
            defaultValue={this.state.lastName}
            onChange={(e, v) => this.setState({lastName: v})}
          /><br />
          <TextField
            floatingLabelText="Address"
            id="address"
            defaultValue={this.state.address}
            onChange={(e, v) => this.setState({address: v})}
          /><br />
        </Dialog>
      </div>
    )
  }
}
