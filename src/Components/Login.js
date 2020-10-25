import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import React from "react";

const clientId = "bf5aba2f7f5b4efe956739f92460473d";
const redirectUri = "http://localhost:3000/redirect";
const authorizeUrl = "https://accounts.spotify.com/authorize"

const Login = (props) => {
  const handleLogin = () => {
    window.location = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  };


  return (
    <>
      <Button onClick={handleLogin} color="inherit" type="submit">
        Login to spotify
      </Button>

    </>
  );
};

export default connect()(Login);
