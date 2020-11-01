import React from 'react'
import { connect } from 'react-redux';
import music from '../images/music.jpeg';

import { Button, CardContent, makeStyles, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {set_playliste_data, create_playlist} from '../actions/action'

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      height: 450,
      width: 320,
      backgroundColor: "#5d5c5c",
      marginLeft: 10,
      marginRight: 10,
      marginTop:10,
    },
    media: {
      height: 300,
      width: 300,
      color: 'wite',
      marginLeft: 10,
      marginRight: 20,
      marginTop:10,
    },
    title: {
        align: 'center',
        color: 'red',
    }
  });

function Playlists(props) {

    const classes = useStyles();
    const [play, setPlay] = React.useState(JSON.parse(props.play));
    const [data, setData] = React.useState(JSON.parse(props.user));
    const [name, SetName] = React.useState("");
    const [das, SetDes] = React.useState("");

    const handes = (e) => {
        SetDes(e.target.value)
    }

    const handname = (e) => {
        SetName(e.target.value)
    }

    const new_playmist = (e) => {
        console.log('ici');
        props.dispatch(create_playlist(props.token, data.id, 'test2', 'test2', true));
    }

    function Card_liste(props) {

        var image = music;
        try {
            image = props.items.images[0].url;
        } catch (error) {
        }
        return (
            <Card className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="artist_name">
                    {props.items.name}
                    </Typography>
                    <Typography gutterBottom>
                        par: {props.items.owner.display_name}
                    </Typography>
                    <a href={props.items.external_urls.spotify}>Voir dans Spotify</a>
                </CardContent>
            </Card>
        );
    }

    function Liste() {
        if (play === null) {
            return (<p>You dont have any playlists</p>);
        } else {
            return(
                <div style={{ width: '100%'}}>
                    <Typography gutterBottom variant="h3"  className={classes.title}>Playlists: </Typography>
                    <Box display='flex' flexDirection="row" flexDirection="row">
                        <div >
                            {play.items.map((items, key) => 
                            <Card_liste  items={items} key={key}/>   
                        )}
                    </div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h4" aline='center'>
                                Crée une playlist
                            </Typography>
                            <TextField placeholder="name" ></TextField>
                            <TextField placeholder="description"></TextField>
                            <br/>
                            <Button onClick={new_playmist}>Cree</Button>
                        </CardContent>
                    </Card>
                    </Box>
                </div>
            );
        }
    }

    React.useEffect(() => {
        props.dispatch(set_playliste_data(props.token, "https://api.spotify.com/v1/me/playlists"));
    });

    return (
    <div>
        <Liste></Liste>
    </div>
    );

}

const mapStateToProps = (state) => ({
    token: state.access_token,
    user: state.userdata,
    play: state.playliste
});

export default connect(mapStateToProps)(Playlists);