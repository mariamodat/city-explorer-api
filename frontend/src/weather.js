import React from 'react';
import axios from 'axios';


class Weather extends React.Component {
   constructor (props)
   {
       super(props);
this.state={
    weather: 'still not found',
}
   }

mountFunc=()=> {
    // it will make HTTP request to the requested API.
    axios.get('/').then(res=>{
        console.log('response', res);
    });
}

    render() { 
        return (  
            <>
            <h1>Hi from Weather </h1>
            <button> Get the Weather</button>
            <h1> the weather is : {this.state.weather}</h1>
            </>
        );
    }
}
 
export default Weather; 