import React, { Component } from "react";
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import logo from "../images/EpitechMySpotify.svg";
import { onLogout } from "../actions/action"
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { set_page } from '../actions/action'
import history from '../services/history'

class Header extends Component {
    handleClickMenu(page) {
        console.log(page, 'test');
        this.props.dispatch(set_page(page));
    };

    logout = (event) => {
        this.props.dispatch(onLogout());
        localStorage.clear();
        history.push('/login')
        history.go()
    }

    render() {
        return (
            <>
                <AppBar position="absolute" style={{ backgroundColor: 'black', zIndex: 4200 }}>
                    <Toolbar variant="dense">
                        <div style={{ maxHeight: '5vh', flexGrow: '1'}}>
                            <img src={logo} style={{ maxHeight: '5vh' }} alt="MySpotify's logo"></img>
                        </div>
                        <Button onClick={this.logout} color="inherit" style={{ float: 'right' }}>
                            <ExitToAppIcon />
                            <p> Log out</p>
                        </Button>
                    </Toolbar>
                </AppBar >
                <Drawer variant="permanent">
                    <Toolbar />
                    <div>
                        <List>
                            {['Home', 'Top Tracks', 'Playlist', 'Research'].map((text, index) => (
                                <ListItem button key={text} onClick={() => this.handleClickMenu(text)}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {['Profile'].map((text, index) => (
                                <ListItem button key={text} onClick={() => this.handleClickMenu(text)}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </Drawer>
            </>
        );
    }

}

const mapStateToProps = (state) => ({
    page: state.page,
    userdata: state.userdata,
});

export default connect(mapStateToProps)(Header);