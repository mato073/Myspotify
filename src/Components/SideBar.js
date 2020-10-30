import React, { Component } from "react";
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';

class SideBar extends Component {
    handleClickMenu (page) {
        console.log(page, 'test');
        this.props.dispatch({type: "SETPAGE", page});
    };

    render() {
        return (
            <Drawer
                variant="permanent">
                <Toolbar />
                <div>
                    <List>
                        {['Home', 'Artist', 'Playlist', 'Research'].map((text, index) => (
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
        );
    }

}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps)(SideBar);