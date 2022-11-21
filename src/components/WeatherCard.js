import React from "react";

const WeatherCard = ({ name, temp, country, weather,  feels_like }) => {
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

console.log({})

  return (
   <div className="city2">
     <li className="city">
      <h2 className="city-name">
        <span>{name}</span>
        <sup>{country}</sup>
      </h2>
      <div className="city-temp">
        {Math.round(temp)}
        <sup>°C</sup>
      </div>
     
      <figure>
        <img className="city-icon" src={iconUrl} alt="city-icon" />
        <p>{weather[0].description}</p> 
        <p>Sensacion: {Math.round(feels_like)} °C</p>
       
        
      </figure>
    </li>
   </div>
  );
};

export default WeatherCard;
