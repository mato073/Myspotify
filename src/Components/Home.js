import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer'
import { connect } from 'react-redux';

import SpotifyWebApi from "spotify-web-api-js";

const s = new SpotifyWebApi();

class Home extends Component {

    constructor() {
        super();
        this.state = { 
            data: [],
            play: []
         };
      }
    
    async componentDidMount() {
        s.setAccessToken(this.props.token);

        try {
            await s.getMe().then((user) => {
                this.setState({ data: user });              
            });
            await s.getUserPlaylists().then((playlists) => {
                this.setState({ play: playlists });
                });
        } catch (error) {
          console.log(error);
        }
    }
    
    render () {
        return (
        <>
            <Header/>
        <p>You are in the Home Component</p>
        <p>Token = {this.props.token}</p>
        <p>Time = {this.props.time}</p>
        <p>Name = {this.props.time}</p>
        <p>Name = {this.state.data.display_name}</p>
            <Footer />
        </>
    );
    }
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    time: state.expiryTime,
    userdata: state.userdata
});

export default connect(mapStateToProps)(Home);