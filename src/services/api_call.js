import React from 'react'
import SpotifyWebApi from "spotify-web-api-js";

const s = new SpotifyWebApi();

export async function Get_User(token) {
  s.setAccessToken(token);

  try {
    s.getMe().then((user) => {
        return (user);
      });
  } catch (error) {
    console.error(error.toString(error))
    }
}

export async function Get_Playliste(token) {
  s.setAccessToken(token);

  try {
    s.getUserPlaylists().then((playlists) => {
        return (playlists);
      });
  } catch (error) {
      console.error(error.toString(error))
  }
}

export async function Get_Top_Artist(token) {
    s.setAccessToken(token);
  
    try {
        s.getMyTopArtists().then((response) => {
            return (response);
        });
    } catch (error) {
        console.error(error.toString(error))
    }
}
  

