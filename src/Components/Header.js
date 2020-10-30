import React, { Component } from "react";
import { connect } from 'react-redux';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            userdata: []
         };
      }

    componentDidMount() {
        console.log(this.props);
    }

    render () {
        return (
        <>
            <p>Header</p>
        </>
    );
    }

}

const mapStateToProps = (state) => ({
    token: state.access_token,
    userdata: state.userdata
});

export default connect(mapStateToProps)(Header);