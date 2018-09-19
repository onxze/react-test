import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const MyMenu = () =>{
  return(
    <AppBar position="static">
        <Tabs>
            <Tab label="Home" component={Link} to='/' />
            <Tab label="Content" component={Link} to='/content' />
            <Tab label="About" component={Link} to='/about' />
      </Tabs>
    </AppBar>
  )
}

export default MyMenu;
