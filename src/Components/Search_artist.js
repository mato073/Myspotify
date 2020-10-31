import { Button, CardContent, makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import {search_artist} from '../actions/action'
import music from '../images/music.jpeg';
import './Search_artist.css'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      backgroundColor: "#5d5c5c",
      marginLeft: 30,
      marginRight: 30,
      marginTop:30,
    },
    media: {
      height: 300,
      color: 'wite'
    },
  });


function Search_artist (props) {

    const classes = useStyles();

    const get_artist = (event) => {
        props.dispatch(search_artist(props.token, "eminem"));
    }

    function Test (props) {

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
                    <a href={props.items.external_urls.spotify}>Voir dans Spotify</a>
                </CardContent>
            </Card>
        );
    }

    function Liste (props) {
        var data = props.search;
        if (data.length === 0) {
            return (<p>vide</p>);
        } else {
            return(
            <div  >
                <h3>Liste artists</h3>
                    <div className="list_artist">
                        {data.artists.items.map((items, key) => 
                        <Test items={items} key={key}/>   
                    )}
                </div>
             </div>
            );
    }
}






    React.useEffect(() => { 
    });

    return (
        <div>
            <Button onClick={get_artist}>recherch</Button>
            <Liste search = {props.search}></Liste>
        </div>
    );
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    search: state.search
});


export default connect(mapStateToProps)(Search_artist);