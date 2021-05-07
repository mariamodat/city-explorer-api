require('dotenv').config()
const superagent = require('superagent');


const movieHandler=((req,res)=>{
    const movieUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIE_API_KEY}&query=${req.query.query}`;
    superagent.get(movieUrl).then(dataMovie => {
      console.log('these are the result of the data movie',dataMovie.body.results);
      const moviesArr = dataMovie.body.results.map(one => new Movies(one));
      res.send(moviesArr);
      console.log(moviesArr);
    })
})

class Movies {
    constructor(data) {
      this.title = data.title,
        this.overview = data.overview;
      this.avg = data.vote_average;
      this.votes = data.vote_count;
      this.image = data.poster_path;
      this.popularity = data.popularity;
      this.released_on = data.release_date;
    }
  }

  module.exports=movieHandler;