const express = require('express');
const app = express();
const cors = require('cors');
let weatherData = require('./weather.json');
// const send = require('send');
// const request = require('request');
// const { request } = require('express');
// const { default: Weather } = require('./frontend/src/weather');

// app.get('/', function (req, res) {
//   res.send('Hello World')
// });
// app.get('/' , (req,res) => res.send('this is Mariam'));
app.use(cors());
app.get('/', (req, res) => {
  res.send(weatherData.data);
  // request()

  let dataArr= []; 
  weatherData.data.forEach(item=>{
      let weatherData= new Weather(item);
      dataArr.push(weatherData);
      res.send(dataArr);
  })
});

function Weather(item){
    
  this.forecast=item.weather.description;
  this.time=item.datetime;

}

app.listen(5000);