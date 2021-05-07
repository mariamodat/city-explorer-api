const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config()
const PORT = process.env.PORT || 3030;

app.use(cors());

const weatherHandler= require('./components/weatherServer');
const movieHandler = require('./components/moviesServer');

app.get('/', (req, res) => res.send('this is Mariam'));

app.get('/weatherl', weatherHandler )


app.get('/movies', movieHandler)


app.listen(PORT);