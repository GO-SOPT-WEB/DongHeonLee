import WeatherCard from "./WeatherCard";
import styled from "styled-components";

const WeatherSection = () => {
  return (
    <CardContainer>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </CardContainer>
  );
};

export default WeatherSection;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;
