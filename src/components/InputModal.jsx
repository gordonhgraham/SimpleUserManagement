import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

import UserActions from '../data/UserActions'
import UserStore from '../data/UserStore'

export default class InputModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.inputState[1],
      id: this.props.inputState[0],
      user: {
        id: '',
        firstName: '',
        lastName: '',
        address: '',
      },
      title: 'Add New User',
    }

    this.initState = {
      open: false,
      id: '',
      user: {
        id: '',
        firstName: '',
        lastName: '',
        address: '',
      },
      title: 'Add New User',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.inputState[1] !== nextProps.inputState[1]) {
      let passedUserId = nextProps.inputState[0]
      let passedOpenState = nextProps.inputState[1]
      let passedUser = nextProps.users.toJS()[passedUserId]

      if (!passedUser) {
        this.initNewUserState(passedOpenState)
      } else {
        this.initEditUserState(passedUser, nextProps.inputState)
      }
    }
  }

  initNewUserState = (open) => {
    this.setState({ open, })
  }

  initEditUserState = (user, inputState) => {
    const title = `Edit ${user.firstName} ${user.lastName}`
    this.setState({
      open: inputState[1],
      id: inputState[0],
      user,
      title,
    })
  }

  addUser = () => {
    UserActions.addUser(this.state.user)
    this.setState(this.initState)
    UserActions.stopInput()
  }

  editUser = () => {
    UserActions.editUser(this.state.id, this.state.user)
    this.setState(this.initState)
    UserActions.stopInput()
  }

  handleSave = () => {
    this.state.id == '' ? this.addUser() : this.editUser();
  }

  handleCancel = () => {
    this.setState(this.initState)
    UserActions.stopInput()
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
        <Dialog
          title={this.state.title}
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleCancel}
        >
          <TextField
            floatingLabelText="First Name"
            id="firstName"
            autoFocus={true}
            defaultValue={this.state.user.firstName}
            onChange={(e, v) => this.setState({ user: { ...this.state.user, firstName: v,}})}
          />{" "}
          <TextField
            floatingLabelText="Last Name"
            id="lastName"
            defaultValue={this.state.user.lastName}
            onChange={(e, v) => this.setState({ user: { ...this.state.user, lastName: v,}})}
          /><br />
          <TextField
            floatingLabelText="Address"
            id="address"
            defaultValue={this.state.user.address}
            onChange={(e, v) => this.setState({ user: { ...this.state.user, address: v,}})}
          /><br />
        </Dialog>
      </div>
    )
  }
}
