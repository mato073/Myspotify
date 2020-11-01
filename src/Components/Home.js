import React, { Component } from "react";
import Menu from './Menu';
import SearchArtist from './Search_artist';
import TopTracks from './TopTracks';
import Playlists from './Playlists'
import Profile from './Profile';
import logo from "../images/EpitechMySpotify.svg";
import { connect } from 'react-redux';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    render() {
        return (
            <>
                <Menu />
                <div style={{ marginTop: '10vh', marginLeft: '15vh' }}>
                    {this.props.page === 'Home' &&
                        <div style={{ textAlign: 'center' }}>
                            <img src={logo} style={{ maxHeight: '10vh' }} alt="MySpotify's logo" />
                            <p>Welcome to MySpotify an Epitech project</p>
                            <p>Infos user en string = {this.props.userdata}</p>
                            <p>Infos page en string = {this.props.page}</p>
                            <p>Infos artist en string = {this.props.artist}</p>
                        </div>
                    }
                    {this.props.page === 'Top Tracks' && <TopTracks />}
                    {this.props.page === 'Research' && <SearchArtist />}
                    {this.props.page === 'Profile' && <Profile />}
                    {this.props.page === 'Playlist' && <Playlists />}
                </div>
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
