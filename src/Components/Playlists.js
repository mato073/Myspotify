import React from 'react'
import { connect } from 'react-redux';
import music from '../images/music.jpeg';

import { Button, CardContent, makeStyles, TextField } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 400,
      backgroundColor: "#5d5c5c",
      marginLeft: 30,
      marginRight: 30,
      marginTop:30,
    },
    media: {
      height: 300,
      width: 300,
      color: 'wite'
    },
    title: {
        align: 'center',
        color: 'red',
    }
  });

function Playlists(props) {

    const classes = useStyles();
    const [play, setPlay] = React.useState(JSON.parse(props.play));

    function Card_liste(props) {

        console.log(props.items);
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
        if (play.length === 0) {
            return (<p>Vous n'avais pas de playliste</p>);
        } else {
            return(
                <div>
                    <Typography gutterBottom variant="h3"  className={classes.title}>Playlists: </Typography>
                    <div className="list_artist">
                        {play.items.map((items, key) => 
                        <Card_liste items={items} key={key}/>   
                    )}
                    </div>
                </div>
            );
        }
    }

    React.useEffect(() => {
        console.log('play =', play);
    });

    return (
    <div>
        <Liste></Liste>
    </div>
    );

}

const mapStateToProps = (state) => ({
    token: state.access_token,
    play: state.playliste
});

export default connect(mapStateToProps)(Playlists);