import React from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { set_top_artist } from '../actions/action'
import './Search_artist.css'

function Artist(props) {

    const get_artist = (event) => {
        props.dispatch(set_top_artist(props.token, 'artists'));
    }

    return (
        <div>
            <p>artist = {props.artist}</p>
            <div>
                <Button onClick={get_artist} className="btn">get top artists</Button>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    token: state.access_token,
    artist: state.artist,
});


export default connect(mapStateToProps)(Artist);