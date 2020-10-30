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

export function  set_user_data (token, params, url) {
    
  setAuthHeader(token);

  return(dispatch) => {
        return axios.get(url, params).then((response)=> {
            dispatch(send_user(response.data))
        });
  }  
}

export function  set_playliste_data (token, params, url) {
    
    setAuthHeader(token);
  
    return(dispatch) => {
          return axios.get(url, params).then((response)=> {
              dispatch(send_play(response.data))
          });
    }  
  }