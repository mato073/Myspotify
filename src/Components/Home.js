import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer'
import { connect } from 'react-redux';


class Home extends Component {

    render () {
        return (
        <>
            <Header/>
        <p>You are in the Home Component</p>
        <p>Token = {this.props.token}</p>
        <p>Time = {this.props.time}</p>
            <Footer/>
        </>
    );
    }
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    time: state.expiryTime
});

export default connect(mapStateToProps)(Home);