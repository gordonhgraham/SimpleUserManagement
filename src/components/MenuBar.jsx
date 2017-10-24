import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Search from 'material-ui/svg-icons/action/search'
import SortByAlpha from 'material-ui/svg-icons/av/sort-by-alpha'
import { white } from 'material-ui/styles/colors';

const MenuBar = () => (
  <AppBar
    title="Users"
    titleStyle={{textAlign: 'center'}}
    iconElementLeft={LeftIcons}
    iconElementRight={RightIcons}
  />
);

const RightIcons = (
  <div>
    <IconButton onClick={() => console.log('Alpha sort clicked')}><SortByAlpha color={white} /></IconButton>
    <IconButton onClick={() => console.log('Search clicked')}><Search color={white} /></IconButton>
  </div>
)

const LeftIcons = (
  <div>
    <IconButton onClick={() => console.log('Add user clicked')}><PersonAdd color={white} /></IconButton>
  </div>
)

export default MenuBar;
