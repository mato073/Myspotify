import React, { Component } from "react";
import Menu from './Menu';
import SearchArtist from './Searchartist';
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
                <div style={{ marginTop: '7.5vh', marginLeft: '30vh', padding: '20px'}}>
                    {this.props.page === 'Home' &&
                        <div style={{ textAlign: 'center' }}>
                            <img src={logo} style={{ maxHeight: '10vh' }} alt="MySpotify's logo" />
                            <p>Welcome to MySpotify an Epitech project</p>
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
