import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import React from "react";
import logo from "../images/EpitechMySpotify.svg";
import './Login.css'

const useStyles = makeStyles({
  loginBox: {
    backgroundColor: 'white',
    height:'40vh',
    width:'40vh',
    borderRadius: 15,
    marginTop: '14.5vh',
  },
  logo: {
    width: '100%',
    "max-height": '65%',
  },
  loginGrid: {
    height: '100%',
  },
  imageGrid: {
    width: '75%',
    "max-height": '65%',
    "text-align": 'center',
  },
});

const scopes = [
  "user-top-read",
  "user-read-email",
  "user-read-private",
  "playlist-read-private",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private"
];
const clientId = "bf5aba2f7f5b4efe956739f92460473d";
const redirectUri = "http://localhost:3000/redirect";
const authorizeUrl = "https://accounts.spotify.com/authorize"

const Login = (props) => {
  const classes = useStyles();


  const handleLogin = () => {
    window.location = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true&scope=${scopes.join("%20")}`;
  };


  return (
    <div className="Login">
    <Container fixed className={classes.loginBox}>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.loginGrid}>
        <Grid item className={classes.imageGrid}>
          <img src={logo} className={classes.logo} alt="MySpotify's logo"></img>
        </Grid>
        <Grid item>
          <Button onClick={handleLogin} variant="contained" color="primary" type="submit">Login to spotify</Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  );
};

export default connect()(Login);
