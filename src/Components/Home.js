import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer'
import SideBar from './SideBar'
import { connect } from 'react-redux';

import {set_user_data, set_playliste_data} from '../actions/index'

class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: []
         };
      }

      send_user(user) {
        const data = JSON.stringify(user);
        this.props.dispatch({type: "SETUSER", data});
      }

      send_playliste(playlists) {
        const play = JSON.stringify(playlists); // JSON -> string
        this.props.dispatch({type: "SETPLAYLISTE", play});
      }

     componentDidMount() {
      
     }

    render () {
        return (
        <>
            <Header/>
            <SideBar/>
        <p>Infos user en string = {this.props.userdata}</p>
        <p>Infos playliste en string = {this.props.play}</p>
        <p>Infos page en string = {this.props.page}</p>
            <Footer />
        </>
    );
    }
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    time: state.expiryTime,
    userdata: state.userdata,
    play: state.playliste,
    page: state.page,
});

export default connect(mapStateToProps)(Home);
