const express = require('express');
const app = express();
const cors = require('cors');
let weatherData = require('./assests/weather.json');
const send = require('send');
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// });
// app.get('/' , (req,res) => res.send('this is Mariam'));
app.get('/' , (req,res)=> {
    res.send(weatherData);
});
 
app.listen(5000);