import React from 'react';
import { connect } from 'react-redux';

import { Button, CardContent, makeStyles, TextField } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import { search_artist } from '../actions/action'
import music from '../images/music.jpeg';
import './Searchartist.css'

const useStyles = makeStyles({
    root: {
        height: 450,
        width: 320,
        maxWidth: 345,
        backgroundColor: "#5d5c5c",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 30,
    },
    media: {
        height: 300,
        width: 300,
        color: 'wite',
        marginLeft: 10,
        marginRight: 20,
        marginTop:10,
    },
    btn: {
        backgroundColor: 'green',
        color: 'white'
    }
});


function Search_artist(props) {

    const classes = useStyles();

    const [value, setValue] = React.useState("");

    const hand = (e) => {
        setValue(e.target.value)
    }

    const get_artist = (event) => {
        const val = value.trim()
        props.dispatch(search_artist(props.token, val));
    }

    function CardListe(props) {

        console.log(props.items);
        var image = music;
        try {
            image = props.items.images[0].url;
        } catch (error) {
        }
        return (
            <Card elevation={4} className={classes.root}>
                <CardMedia
                    className={classes.media}
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" className="artist_name">
                        {props.items.name}
                    </Typography>
                    <Button className={classes.btn} href={props.items.external_urls.spotify}>Spotify</Button>
                </CardContent>
            </Card>
        );
    }

    function Liste(props) {
        var data = props.search;
        if (data.length === 0) {
            return (<p></p>);
        } else {
            return (
                    <div style={{ width: '100%' }}>
                    <div className="list_artist">
                        {data.artists.items.map((items, key) =>
                            <CardListe items={items} key={key} />
                        )}
                    </div>
                    </div>
            );
        }
    }

    return (
        <div>
            <div style={{ width: '100%' }}>
                <div className="box">
                    <TextField  fullWidth onChange={hand} id="outlined-full-width" label="search" style={{ margin: 8 }}  margin="normal"variant="outlined"/>
                    <Button className={classes.btn} onClick={get_artist}>Search</Button>
                </div>
            </div>
                 <Liste search={props.search}></Liste>
            </div>
    );
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    search: state.search
});


export default connect(mapStateToProps)(Search_artist);