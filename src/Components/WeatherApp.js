import { useState } from 'react';
import React from 'react';
import { getCurrentPosition } from '../utils/getCurrentPosition';
import { FetchWeather } from '../utils/FetchWeather';
import WeatherAppStyle from './WeatherApp.module.css';

export function WeatherApp() {
  let [weather, SetWeaher] = useState({ icon: undefined, temp: undefined, cityName: undefined });
  let [textField, setField] = useState('');

  let setWeater = (response) => {
    SetWeaher({
      icon: response.data.data[0].weather.icon,
      temp: response.data.data[0].temp,
      cityName: response.data.data[0].city_name,
    });
  };
  let onChange = (e) => {
    setField(e.target.value);
  };
  let Onclick = (citty) => {
    FetchWeather({ city: citty }).then(function fucn(response) {
      setWeater(response);
    });
  };
  let OnClickAllowGeo = () => {
    let succesPoS = (pos) => {
      FetchWeather({ pos: pos }).then(function func(response) {
        setWeater(response);
      });
    };
    getCurrentPosition(succesPoS);
  };

  return (
    <div className="WeatherApp">
      <div className="city">
        <input
          className={WeatherAppStyle.input}
          onChange={(e) => {
            onChange(e);
          }}
          value={textField}
          type="text"
          placeholder="Введите название города"
        />
        <button
          className={WeatherAppStyle.myButton}
          onClick={() => {
            Onclick(textField);
          }}>
          Посмотреть
        </button>
        <button
          className={WeatherAppStyle.myButton}
          onClick={() => {
            OnClickAllowGeo();
          }}>
          Дать доступ к геолокации
        </button>
      </div>
      <div className={WeatherAppStyle.temp}>{weather.temp ? weather.temp + '°' : ''}</div>
      <div className="pic">
        <img
          src={
            weather.icon
              ? `https://www.weatherbit.io/static/img/icons/${weather.icon}.png`
              : 'https://img.mobigama.net/app/8999-klara_weather/1_klara_weather.png'
          }
          alt=""
        />
        <div className={WeatherAppStyle.city}>{weather.cityName}</div>
      </div>
    </div>
  );
}
