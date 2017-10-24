import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Search from 'material-ui/svg-icons/action/search'

const MenuBar = () => (
  <AppBar
    title="Users"
    titleStyle={{textAlign: 'center'}}
    iconElementLeft={<IconButton><PersonAdd /></IconButton>}
    onLeftIconButtonTouchTap={()=> console.log('Left Button Tapped')}
    iconElementRight={<IconButton><Search /></IconButton>}
  />
);

export default MenuBar;
