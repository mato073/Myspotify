import React, { Component } from "react";
import Menu from './Menu';
import Footer from './Footer';
import SearchArtist from './Search_artist';
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
                    <>
                    <p>Infos user en string = {this.props.userdata}</p>
                    <p>Infos playliste en string = {this.props.play}</p>
                    <p>Infos page en string = {this.props.page}</p>
                    </>
                    }
                    {this.props.page === 'Research' && <SearchArtist/> }
                </div>
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
