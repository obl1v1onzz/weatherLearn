const axios = require('axios');
export let FetchWeather = (pos) => {
  debugger;
  if (pos.city) {
    return axios.get(
      `https://api.weatherbit.io/v2.0/current?city=${pos.city}&country=RU&key=${process.env.REACT_APP_MY_API_KEY}&include=minutely`,
    );
  } else if (pos.pos) {
    return axios.get(
      `https://api.weatherbit.io/v2.0/current?lat=${pos.pos.coords.latitude}&lon=${pos.pos.coords.longitude}&key=${process.env.REACT_APP_MY_API_KEY}`,
    );
  } else {
    return axios.get(
      `https://api.weatherbit.io/v2.0/current?&key=${process.env.REACT_APP_MY_API_KEY}`,
    );
  }
};
