import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { WEATHER_TYPE } from "../assets/weather";

const WeatherCard = () => {
  const { type, area } = useParams();
  const [weatherData, setWeatherData] = useState([
    {
      id: 0,
      date: "",
      weather: "",
      weather_description: "",
      weather_img_url: "",
      temp: 0.0,
      feels_like: 0.0,
      temp_min: 0.0,
      temp_max: 0.0,
      clouds: 0.0,
    },
  ]);

  const dataType = type === "today" ? "weather" : "forecast";

  const searchWeather = async () => {
    const today = new Date();
    const todayMonth = String(today.getMonth() + 1).padStart(2, "0");
    const todayDate = String(today.getDate()).padStart(2, "0");
    let weekWeatherData = [];

    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/${dataType}?q=${area}&appid=${
            import.meta.env.VITE_APP_WEATHER
          }&units=metric`
        )
        .then((response) => response.data)
        .then((data) => {
          switch (type) {
            case "today": // 오늘 데이터일 경우
              setWeatherData([
                {
                  id: 0,
                  weather_description: data.weather[0].description,
                  weather_img_url: WEATHER_TYPE.filter(
                    (i) => i.description === data.weather[0].description
                  )[0].imgURL,
                  temp: data.main.temp,
                  feels_like: data.main.feels_like,
                  temp_min: data.main.temp_min,
                  temp_max: data.main.temp_max,
                  clouds: data.clouds.all,
                },
              ]);
              break;
            case "week": // 주간 데이터일 경우
              data.list
                .filter((i, idx) => [0, 8, 16, 24, 32].indexOf(idx) !== -1)
                .map((data, idx) => {
                  weekWeatherData.push({
                    id: idx,
                    date: `${todayMonth}/${parseInt(todayDate) + idx}`,
                    weather_description: data.weather[0].description,
                    weather_img_url: WEATHER_TYPE.filter(
                      (i) => i.description === data.weather[0].description
                    )[0].imgURL,
                    temp: data.main.temp,
                    feels_like: data.main.feels_like,
                    temp_min: data.main.temp_min,
                    temp_max: data.main.temp_max,
                    clouds: data.clouds.all,
                  });
                });
              setWeatherData(weekWeatherData);
              break;
          }
        });
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    searchWeather();
  }, []);

  return (
    <div>
      <AppWrap>
        <h3 className="weather-title">{area}</h3>
        <div className="cards">
          {weatherData.map((data, idx) => (
            <li className="cards__card" key={idx}>
              <p>{data.date}</p>
              <img
                src={data.weather_img_url}
                alt={data.weather_description}
              ></img>
              <p>온도 {data.temp}°C</p>
              <p>체감 온도 {data.feels_like}°C</p>
              <p>최저 온도 {data.temp_min}°C</p>
              <p>최고 온도 {data.temp_max}°C</p>
              <p>구름량 {data.clouds}%</p>
            </li>
          ))}
        </div>
      </AppWrap>
    </div>
  );
};

export default WeatherCard;
const AppWrap = styled.div`
  padding: 3rem;
  list-style: none;
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  li {
    margin: 2rem;
  }
`;
