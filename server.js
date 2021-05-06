const express = require('express');
const app = express();
const cors = require('cors');
let weatherData = require('./weather.json');
require('dotenv').config()
const PORT = process.env.PORT || 3030;
const superagent = require('superagent');
app.use(cors());
let key = process.env.WEATHER_KEY;

app.get('/', (req, res) => res.send('this is Mariam'));



app.get('/weatherl', (request, response) => {

  // const cityName=request.query.city;
  try {


    const long = request.query.lon;
    const latit = request.query.lat;
    const url = `http://api.weatherbit.io/v2.0/forecast/daily&key=${key}?key=${key}&lon=${long}&lat=${latit}`;
    superagent.get(url).then(data => {

      const arrOfData = data.body.data.map(item => new Weather(item));
      response.send(arrOfData);
    })

  }
  catch (error) {
    const arrOfData = weatherData.data.map(data => new Weather(data));
    res.send(arrOfData);
  }

});
// function locationSet(request,response){
//         const cityName=request.query.city;
//         // console.log('Hi query',request.query)
//       
//         const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${cityName}&format=json` 
//         

//          superagent.get(url)
//          .then(data =>{
//             let locationData = new Location (cityName,data.body);            
//             response.send(locationData);
//          })
//          .catch(()=>{
//         errorHandler()
//     })
// }


app.get('/weather', (rq, rs) => {
  // console.log(rq.query);

  // console.log(rq.query);

  console.log(weatherData);
  const arrOfData = weatherData.data.map(data => new Weather(data));

  rs.send(arrOfData);
});


app.get('/movies', (req, res) => {
  // res.send('hi from movies');
  console.log('the query', req.query.query);
  const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${req.query.query}`;
  superagent.get(movieUrl).then(dataMovie => {
    console.log(dataMovie.body);
    const moviesArr = dataMovie.body.results.map(one => new Movies(one));
    res.send(moviesArr);
    console.log(moviesArr);
  })


})




// function Movies(data) {
//  this.title =data.title;
//  this.overview=data.overview;
//  this.avg=data.average_votes;
//  this.votes=data.total_votes;
//  this.image=data.image_url;
//  this.popularity=data.popularity;
//  this.released_on=data.released_on;
// }


class Movies {
  constructor(data) {
    this.title = data.title,
      this.overview = data.overview;
    this.avg = data.average_votes;
    this.votes = data.total_votes;
    this.image = data.image_url;
    this.popularity = data.popularity;
    this.released_on = data.released_on;
  }
}




function Weather(item) {

  this.forecast = item.weather.description;
  this.time = item.datetime;
}

// function Location(cityName, loca) {
//   this.search_query = cityName;
//   this.formatted_query = loca[0].display_name;
//   this.latitude = loca[0].lat;
//   this.longitude = loca[0].lon;
// }



app.listen(PORT);