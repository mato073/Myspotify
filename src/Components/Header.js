import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from "../images/EpitechMySpotify.svg";
import {onLogout} from "../actions/action"

import history from '../services/history'

class Header extends Component {

    /*
    userButton = (event) => {
        const [anchorEl, setAnchorEl] = React.useState(null);
        const open = Boolean(anchorEl);
        const user = JSON.parse(this.props.userdata);

        const handleMenu = (event) => {
            setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
            setAnchorEl(null);
        };

        return (
            <div>
                <Button
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit">
                    <AccountCircle />
                    <p>{user.display_name}</p>
                </Button>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
            </div>
        );
    }
    */
    
    logout = (event) => {
        this.props.dispatch(onLogout());
        localStorage.clear();
        history.push('/login')
        history.go()
    }


    render() {
        return (
            <AppBar position="static" style={{ backgroundColor: 'black' }}>
                <Toolbar variant="dense">
                    <div style={{ maxHeight: '5vh', flexGrow: '1'}}>
                        <img src={logo} style={{ maxHeight: '5vh'}}></img>
                    </div>
                    <Button onClick={this.logout} color="inherit" style={{ float: 'right' }}>
                        <ExitToAppIcon/>
                        <p> Log out</p>
                    </Button>
                </Toolbar>
            </AppBar >
        );
    }

}

const mapStateToProps = (state) => ({
    userdata: state.userdata,
});

export default connect(mapStateToProps)(Header);