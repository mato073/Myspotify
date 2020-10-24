import React, { Component } from "react";
import { connect } from 'react-redux';
import { getParamValues } from '../services/urlmanage';
import _ from 'lodash';

class RedirectPage extends Component {

    storeToken(access_token, expiryTime) {

    }

    componentDidMount() {
        const { setExpiryTime, history, location } = this.props;
        try {
          if (_.isEmpty(location.hash)) {
            return history.push('/home');
          }
          const access_token = getParamValues(location.hash);
          const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
          history.push('/home');
        } catch (error) {
          history.push('/');
        }
      }
    render () {
    return null;
    }
};

export default connect()(RedirectPage);