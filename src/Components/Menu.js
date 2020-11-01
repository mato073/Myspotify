import React from "react";
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
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


const drawerWidth = '30vh';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#121212',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#202225',
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Header(props) {

    const classes = useStyles();

    function handleClickMenu(page) {
        props.dispatch(set_page(page));
    };

    const logout = (event) => {
        props.dispatch(onLogout());
        localStorage.clear();
        history.push('/login')
        history.go()
    };


    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar variant="dense">
                    <div style={{ maxHeight: '5vh', flexGrow: '1' }}>
                        <img src={logo} style={{ maxHeight: '5vh' }} alt="MySpotify's logo"></img>
                    </div>
                    <Button onClick={logout} color="inherit" style={{ float: 'right' }}>
                        <ExitToAppIcon />
                        <p> Log out</p>
                    </Button>
                </Toolbar>
            </AppBar >
            <Drawer className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {['Home', 'Top Tracks', 'Playlist', 'Research'].map((text, index) => (
                            <ListItem button key={text} onClick={() => handleClickMenu(text)}>
                                <ListItemText style={{color: '#b9bbbe'}} primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Profile'].map((text, index) => (
                            <ListItem button key={text} onClick={() => handleClickMenu(text)}>
                                <ListItemText style={{color: '#b9bbbe'}} primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );

}

const mapStateToProps = (state) => ({
    page: state.page,
    userdata: state.userdata,
});

export default connect(mapStateToProps)(Header);