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
    }
  }

  // populateUserInfo = () => {
  //   console.log('populateUserInfo Called');
  //   [...this.props.users.values()].map(user => {
  //     if (user.id == this.props.inputState[0]) {
  //       this.setState({
  //         id: user.id,
  //         firstName: user.firstName,
  //         lastName: user.lastName,
  //         address: user.address,
  //       })
  //     }
  //   })
  // }

  componentWillReceiveProps(nextProps) {
    if (this.props.inputState[1] !== nextProps.inputState[1]) {
      let passedUserId = nextProps.inputState[0]

      let passedUser = nextProps.users.toJS()[passedUserId]
      if (!passedUser) {
        this.setState({ open: nextProps.inputState[1] })
        return;
      }

      this.setState({
        open: nextProps.inputState[1],
        id: nextProps.inputState[0],
        user: nextProps.users.toJS()[passedUserId],
      })
    }
  }

  addUser = () => {
    UserActions.addUser(this.state.user)
    this.setState(this.initState)
    UserActions.stopInput()
  }

  handleSave = () => {
    console.log('handleSave called');
    this.state.id == '' ? this.addUser() : console.log('edit user, not add');
      // UserActions.editUser(this.state.id, user);
    // this.setState(this.initState)
    // UserActions.stopInput()
  }

  handleCancel = () => {
    UserActions.stopInput()
    this.setState(this.initState)
  }

  render() {
    console.log('this.state:', this.state);
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
