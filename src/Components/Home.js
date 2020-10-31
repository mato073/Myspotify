import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer'
import SideBar from './SideBar'
import { connect } from 'react-redux';

class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: []
         };
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
