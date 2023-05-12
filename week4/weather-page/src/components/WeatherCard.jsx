import myStore from "../store";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const WeatherCard = () => {
  const { result, setResult } = myStore();
  const { area } = useParams();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${area}&appid=${
    import.meta.env.VITE_APP_WEATHER
  }&units=metric`;
  const searchWeather = async (e) => {
    try {
      const data = await axios({
        method: "get",
        url: url,
      });
      setResult(data);
      console.log(data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    searchWeather();
  }, [area]);

  return (
    <div>
      {Object.keys(result).length !== 0 && (
        <AppWrap>
          <div className="city">도시 : {result.data.name}</div>
          <div className="weather">날씨 : {result.data.weather[0].main}</div>
          <div className="temp">온도 : {result.data.main.temp}</div>
          <div className="temp_feel">
            체감온도 : {result.data.main.feels_like}
          </div>
          <div className="temp_min_max">
            최저,최고 기온 :{result.data.main.temp_min},
            {result.data.main.temp_max}
          </div>
          <div className="cloud">구름 : {result.data.clouds.all}</div>
        </AppWrap>
      )}
    </div>
  );
};

export default WeatherCard;
const AppWrap = styled.div`
  padding: 3rem;
`;
