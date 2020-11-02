import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { set_top_artist } from '../actions/action'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        width: '100%',
        marginTop: 20
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    title: {
        align: 'center',
        color: 'black',
    }
}));

function TopTracks(props) {

    useEffect(() => {
        if (!props.track || props.track.length === 0)
            props.dispatch(set_top_artist(props.token, 'tracks'));
    }, []);

    const classes = useStyles();

    function TrackList() {
        return (
            <di>
            <Typography gutterBottom variant="h3"  className={classes.title}>Top tracks: </Typography>
            <Grid container direction="column" justify="flex-start" alignItems="center">
                {props.track.items.map((items, key) =>
                    <Card elevation={4} className={classes.root} flexGrow={1}>
                        <CardMedia
                            className={classes.cover}
                            image={items.album.images[0].url}
                            title="Live from space album cover"
                        />
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                                <Typography component="h5" variant="h5">
                                    #{key + 1} - {items.name}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {items.artists[0].name}
                                </Typography>
                            </CardContent>
                            <div className={classes.controls}>
                                <IconButton aria-label="play/pause" href={items.external_urls.spotify} target="_blank">
                                    <PlayArrowIcon className={classes.playIcon} />
                                </IconButton>
                            </div>
                        </div>
                    </Card>
                )}
            </Grid>
        </di>
        );
    }

    return (
        <div>
            { props.track && props.track.total && <TrackList /> || <p>You dont have any top tracks</p>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    track: state.track,
});


export default connect(mapStateToProps)(TopTracks);