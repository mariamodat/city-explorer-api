const express = require('express');
const app = express();
const cors = require('cors');
let weatherData = require('./weather.json');
require('dotenv').config()
const PORT = process.env.PORT || 3030;
const keyLocation = process.env.LOCATION_KEY;
const superagent = require('superagent');
app.use(cors());

app.get('/', (req, res) => res.send('this is Mariam'));



// app.get('/location',locationSet);
// function locationSet(request,response){
//         const cityName=request.query.city;
//         // console.log('Hi query',request.query)
//         let key=process.env.LOCATION_KEY;
//         const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json` 
//          superagent.get(url)
//          .then(data =>{
//             let locationData = new Location (cityName,data.body);            
//             response.send(locationData);
//          })
//          .catch(()=>{
//         errorHandler()
//     })
// }


app.get('/weather', (rq,rs)=> {
  // console.log(rq.query);
 
    // console.log(rq.query);
  
    console.log(weatherData);
        const arrOfData = weatherData.data.map(data => new Weather(data));
       
        rs.send(arrOfData);
    });

  







    function Weather(item) {

      this.forecast = item.weather.description;
      this.time = item.datetime;
    }

    function Location(cityName, loca) {
      this.search_query = cityName;
      this.formatted_query = loca[0].display_name;
      this.latitude = loca[0].lat;
      this.longitude = loca[0].lon;
    }



    app.listen(PORT);