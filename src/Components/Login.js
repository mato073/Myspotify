import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import React from "react";

const useStyles = makeStyles({
  loginBtn: {
    background: 'green',
    border: 0,
    borderRadius: 3,
    color: 'white',
    height: 48,
    padding: '0 30px',
    alignItems: 'center',
  },
});

const clientId = "bf5aba2f7f5b4efe956739f92460473d";
const redirectUri = "http://localhost:3000/redirect";
const authorizeUrl ="https://accounts.spotify.com/authorize"

const Login = (props) => {
  const classes = useStyles();

  
  const handleLogin = () => {
    window.location = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  };  


  return (
    <>
    <h1>Login to Spotify</h1>
    <div className="login">
      <Button  onClick={handleLogin} className={classes.loginBtn} type="submit">
        Login to spotify
      </Button>
    </div>
    </>
  );
};

export default connect()(Login);
