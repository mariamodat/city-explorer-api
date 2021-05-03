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
app.get('/' , (req,res)=> {
    res.send(weatherData.data);
    // request()
    // const dataFile=require(`./weather.json`);
    // let dataArr= []; 
    // dataFile.data.forEach(item=>{
    //     let weatherData= new Weather(item);
    //     dataArr.push(weatherData);
    //     res.send(dataArr);
    // })
});
 
app.listen(5000);