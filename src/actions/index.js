import axios from 'axios'
import {setAuthHeader} from '../services/urlmanage'


export function send_user(user) {
    return {
        type: "SETUSER",
        user: user
    }
}

export function send_play(play) {
    return {
        type: "SETPLAYLISTE",
        play: play
    }
}

export function  set_user_data (token, url) {

  setAuthHeader(token);

  return(dispatch) => {
        return axios.get(url).then((response)=> {
            dispatch(send_user(JSON.stringify(response.data)))
        });
  }
}

export function  set_playliste_data (token, url) {

    setAuthHeader(token);

    return(dispatch) => {
          return axios.get(url).then((response)=> {
              dispatch(send_play(JSON.stringify(response.data)))
          });
    }
  }
