import axios from "axios";
import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const Main = () => {
  const [searchText, setSearchText] = useState("berlin");
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(" ");
  const [cityname, setCityname] = useState([]);
  let apiKey = process.env.REACT_APP_API_KEY;
  let units = "metric";
  let lang = "es";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=${units}&lang=${lang}`;

  useEffect(() => {
    getCity();
    setSearchText(""); console.log(getCity)
    // eslint-disable-next-line
  }, []);

  const getCity = async () => {
    try {
      if (searchText) {
        const { data } = await axios(url);
        console.log(data);
        const {
          name,
          main: { feels_like,temp },
          sys: { country },
          weather,
         
          

          
        } = data;
        setInfo([{ name, temp, country, weather,feels_like }, ...info]);
      }
    } catch (error) {
      setError("Ciudad invalida");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText) {
      setError("Ingresa una ciudad");
    } else {
      if (cityname.includes(searchText)) {
        setError(`Ya buscastes esta ciudad ${searchText.toUpperCase()}`);
      } else {
        getCity();
        setCityname([...cityname, searchText]);
      }
      setSearchText("");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  return (
    <section className="main">
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          placeholder="Busca una Ciudad"
          autoFocus
        />
        <button type="submit">Buscar</button>
        <span className="msg">{error}</span>
      </form>
      <div className="container">
        <ul className="cities">
          {info.map((item, index) => {
            return <WeatherCard key={index} {...item} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Main;
