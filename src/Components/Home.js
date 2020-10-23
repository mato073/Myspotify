import React, { Component } from "react";
import Header from './Header';
import Footer from './Footer'


class Home extends Component {

    render () {
        return (
        <>
            <Header/>
            <p>You are in the Home Component</p>
            <Footer/>
        </>
    );
    }
}

export default Home;