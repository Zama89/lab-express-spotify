require('dotenv').config();

const express = require('express');
const hbs = require('hbs');
const  SpotifyWebApi  =  require ( 'spotify-web-api-node' ) ;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

  spotifyApi
    .searchArtists () 
    .then ( data  =>  { 
        console . log ( 'Los datos recibidos de la API:' ,  data . body ) ; 
    } ) 
    .catch ( err  =>  console . log ( 'Se produjo el error al buscar artistas:' ,  err ) ) ;

  // Retrieve an access token
  spotifyApi
    .clientCredentialsGrant()
    .then(data => spotifyApi.setAccessToken(data.body['access_token']))
    .catch(error => console.log('Something went wrong when retrieving an access token', error));

// require spotify-web-api-node package here:

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

// setting the spotify-api goes here:

// Our routes go here:

app.get("/"), (req, res) =>{

}

app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
