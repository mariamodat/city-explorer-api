const superagent = require('superagent');
require('dotenv').config()
const key = process.env.WEATHER_KEY;


const weatherFunction=((req,res)=>{
    try {


        const long = req.query.lon;
        const latit = req.query.lat;
        const url = `http://api.weatherbit.io/v2.0/forecast/daily&key=${key}?key=${key}&lon=${long}&lat=${latit}`;
        superagent.get(url).then(data => {
    
          const arrOfData = data.body.data.map(item => new Weather(item));
          res.send(arrOfData);
        })
    
      }
      catch (error) {
        const arrOfData = weatherData.data.map(data => new Weather(data));
        res.send(arrOfData);
      }
    
});


function Weather(item) {

    this.forecast = item.weather.description;
    this.time = item.datetime;
  }
module.exports=weatherFunction;