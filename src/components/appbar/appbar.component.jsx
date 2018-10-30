import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import injectSheet from 'react-jss';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { styles } from './appbar.styles';
import Logo from '../../assets/veratrust.png';


const AppBarComponent = ({
  classes,
  handleMenu,
  handleClick,
  handleClickAway,
  open,
  anchorEl,
  value,
}) => {
return (
  <AppBar position="static" className={classes.root}>
    <Toolbar>
      <Typography variant="h6" color="inherit" className={classes.grow}>
        <img src={Logo} alt="Veratrust: Inspect, Verify, Validate and Trust" className={classes.logo}/>
      </Typography>

      
      {/* Tab router menu */}
      <div className="App">
      <Route
        path="/"
        render={() => (
          <div>
            <Tabs value={value} onChange={handleClick} className={classes.tabs}>
              <Tab label="Home" component={Link} to="/" className={classes.tab}/>
              <Tab label="Audit" component={Link} to="/audit" className={classes.tab}/>
              <Tab label="Inspect" component={Link} to="/inspect" className={classes.tab}/>
              <Tab label="Manage" component={Link} to="/management" className={classes.tab}/>
              <Tab label="Reconcile" component={Link} to="/reconcile" className={classes.tab}/>
            </Tabs>
          </div>
        )}
      />
    </div>


      {/* Account dropdown list */}
      <div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
            <IconButton aria-owns={open ? 'menu-appbar' : null} aria-haspopup="true" onClick={handleMenu} color="inherit">
              <AccountCircle />
            </IconButton>
            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
              transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                    }}
              open={open}>
              <Link to="/login" className={classes.link}>
                <MenuItem>
                    Log in
                </MenuItem>
              </Link>
              <Link to="/signup" className={classes.link}>
                <MenuItem>
                    Sign up
                </MenuItem>
              </Link>
            </Menu>
          </div>
        </ClickAwayListener>
      </div>
    </Toolbar>
  </AppBar>
);
}

export default injectSheet(styles)(AppBarComponent);