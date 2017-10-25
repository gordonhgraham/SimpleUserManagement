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

  componentWillReceiveProps(nextProps) {
    if (this.props.input !== nextProps.input) {
      this.setState({ open: nextProps.input })
    }
  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleSave = () => {
    UserActions.addUser({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      address: this.state.address,
    })
    UserActions.toggleInput()
    this.setState(this.initState)
  }

  handleCancel = () => {
    this.setState(this.initState)
    UserActions.toggleInput()
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

    const ENTER_KEY_CODE = 13;

    return (
      <div>
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleCancel}
        >
          <TextField
            floatingLabelText="First Name"
            id="firstName"
            autoFocus={true}
            defaultValue={this.state.firstName}
            onChange={(e, v) => this.setState({firstName: v})}
            onKeyDown={(e) => {
              if (e.keyCode == ENTER_KEY_CODE) {
                this.handleSave()
              }
            }}
          />{" "}
          <TextField
            floatingLabelText="Last Name"
            id="lastName"
            defaultValue={this.state.lastName}
            onChange={(e, v) => this.setState({lastName: v})}
            onKeyDown={(e) => {
              if (e.keyCode == ENTER_KEY_CODE) {
                this.handleSave()
              }
            }}
          /><br />
          <TextField
            floatingLabelText="Address"
            id="address"
            defaultValue={this.state.address}
            onChange={(e, v) => this.setState({address: v})}
            onKeyDown={(e) => {
              if (e.keyCode == ENTER_KEY_CODE) {
                this.handleSave()
              }
            }}
          /><br />
        </Dialog>
      </div>
    )
  }
}
