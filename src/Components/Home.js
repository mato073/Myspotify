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

    async componentDidMount() {
        s.setAccessToken(this.props.token);

        try {
            await s.getMe().then((user) => {
                this.send_user(user)
            });
            await s.getUserPlaylists().then((playliste) => {
                    this.send_playliste(playliste);
                });

           this.setState({ data: JSON.parse(this.props.userdata)}); // string -> JSON
        } catch (error) {
          console.log(error);
        }
    }

    render () {
        return (
        <>
            <Header/>
        <p>You are in the Home Component</p>
        <p>Infos user en string = {this.props.userdata}</p>
        <p>Nom user = {this.state.data.display_name}</p>
            <Footer />
        </>
    );
    }
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    time: state.expiryTime,
    userdata: state.userdata,
    play: state.playliste
});

export default connect(mapStateToProps)(Home);
