import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import React from "react";
import logo from "../images/EpitechMySpotify.svg";

const useStyles = makeStyles({
  loginBox: {
    backgroundColor: '#272c34',
    height: '75vh',
    borderRadius: 5,
    marginTop: '12.5vh',
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

const clientId = "bf5aba2f7f5b4efe956739f92460473d";
const redirectUri = "http://localhost:3000/redirect";
const authorizeUrl = "https://accounts.spotify.com/authorize"

const Login = (props) => {
  const classes = useStyles();


  const handleLogin = () => {
    window.location = `${authorizeUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`;
  };


  return (
    <Container fixed className={classes.loginBox}>
      <Grid container direction="column" justify="center" alignItems="center" className={classes.loginGrid}>
        <Grid item className={classes.imageGrid}>
          <img src={logo} className={classes.logo}></img>
        </Grid>
        <Grid item>
          <Button onClick={handleLogin} variant="contained" color="primary" type="submit">Login to spotify</Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default connect()(Login);
