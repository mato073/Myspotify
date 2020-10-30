import { Component } from "react";
import { connect } from 'react-redux';
import { getParamValues } from '../services/urlmanage';
import _ from 'lodash';

import {set_user_data, set_playliste_data} from '../actions/index'


class RedirectPage extends Component {

    storeToken(token) {
        localStorage.setItem('token', token);
        this.props.dispatch({type: "SETTOKEN", token});
        this.props.dispatch(set_user_data(token, "https://api.spotify.com/v1/me"));
        this.props.dispatch(set_playliste_data(token, "https://api.spotify.com/v1/me/playlists"));
    }
    storeTime(expiryTime) {
        localStorage.setItem('expiry_time', expiryTime);
        this.props.dispatch({type: "SETEXPiR", expiryTime});
    }

    componentDidMount() {
        const {history, location } = this.props;
        try {
          if (_.isEmpty(location.hash)) {
            return history.push('/home');
          }
          const access_token = getParamValues(location.hash);
          const token = access_token.access_token;
          const expiryTime = new Date().getTime() + access_token.expires_in * 1000;

          this.storeToken(token);
          this.storeTime(expiryTime);
          history.push('/home');
        } catch (error) {
          history.push('/');
        }
      }
    render () {
    return null;
    }
}
export default connect()(RedirectPage);
