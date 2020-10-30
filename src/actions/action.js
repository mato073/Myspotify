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

export function send_page(page) {
    return {
        type: "SETPAGE",
        page: page
    }
}

export function set_user_data (token, url) {

  setAuthHeader(token);

  return async (dispatch) => {
      try {
        return await axios.get(url).then((response)=> {
            localStorage.setItem('userdata', JSON.stringify(response.data));
            dispatch(send_user(JSON.stringify(response.data)))
        });
    } catch (error) {
        console.log('error', error);
      }
  }
}

export function  set_playliste_data (token, url) {

    setAuthHeader(token);

    return async (dispatch) => {
        try {
          return await axios.get(url).then((response)=> {
            localStorage.setItem('playliste', JSON.stringify(response.data));
              dispatch(send_play(JSON.stringify(response.data)))
          });
        } catch (error) {
            console.log('error', error);
        }
    }
  }

  export function onLogout() {
    return dispatch => {
        console.log('user logout');
        dispatch({ type: "DESTROY_SESSION" });
     };
  }

  export function ser_page(page) {
    return dispatch => {
        dispatch(send_page(page));
     };
  }