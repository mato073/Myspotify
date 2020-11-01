import axios from 'axios'
import {setAuthHeader} from '../services/urlmanage'


export function send_user(user) {
    return {
        type: "SET_USER",
        user: user
    }
}

export function send_play(play) {
    return {
        type: "SET_PLAYLISTE",
        play: play
    }
}

export function send_top_track(track) {
    return {
        type: "SET_TRACK",
        track: track
    }
}

export function send_top_artist(artist) {
    return {
        type: "SET_ARTIST",
        artist: artist
    }
}
export function send_page(page) {
    return {
        type: "SET_PAGE",
        page: page
    }
}

export function send_search(search) {
    return {
        type: "SET_SEARCH",
        search: search
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
        return (undefined);
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
            return (undefined);
        }
    }
  }

export function create_playlist(token, user_id, name, des, bool) {
    setAuthHeader(token);
     const url = `https://api.spotify.com/v1/users/${user_id}/playlists`

    return async (dispatch) => {
        try {
            axios.post(url , {name: name, description: des, public: bool});
            return (set_playliste_data(token, "https://api.spotify.com/v1/me/playlists"));
        } catch (error) {
            console.log('error', error);
            return (undefined);
        }
    }
}

export function set_top_artist(token, type) {

    setAuthHeader(token);
    const url = `https://api.spotify.com/v1/me/top/${type}`

      return async (dispatch) => {
          try {
              return await axios.get(url).then((response) => {
                  if (type === 'artists')
                    dispatch(send_top_artist(response.data));
                  if (type === 'tracks')
                    dispatch(send_top_track(response.data));
              });
          } catch (error) {
            console.log('error', error);
            return (undefined);
         } 
      }
}

export function search_artist(token, artist) {

    setAuthHeader(token);
    const url = `https://api.spotify.com/v1/search?q=${artist}&type=artist&market=US&limit=10&offset=5`
    
    return async (dispatch) => {
        try {
          return await axios.get(url).then((response)=> {
              dispatch(send_search(response.data))
          });
      } catch (error) {
          console.log('error', error);
          return (undefined);
       }
    }
  }


export function onLogout() {
    return dispatch => {
        console.log('user logout');
        dispatch({ type: "DESTROY_SESSION" });
     };
  }

  export function set_page(page) {
    return dispatch => {
        dispatch(send_page(page));
     };
}