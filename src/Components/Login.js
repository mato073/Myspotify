import React, { Component } from "react";
import hash from "../hash.js";

export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = "bf5aba2f7f5b4efe956739f92460473d";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-playback-state"
];

window.location.hash = "";

class Login extends Component {

    componentDidMount() {
        let _token = hash.access_token;
        if (_token) {
          this.setState({
            token: _token
          });
        }
      }

    render () {
        return (
         <>
            <header className="App-header">
                {!this.setState.token && (<a
                    className="btn btn--loginApp-link"
                    href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                    "%20"
                    )}&response_type=token&show_dialog=true`}
                >
                    Login to Spotify
                </a>)}
            </header>
         </>
        );
    } 
}

export default Login;