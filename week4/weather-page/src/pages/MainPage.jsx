import Header from "../components/Header";
import Search from "../components/Search";
import WeatherSection from "../components/WeatherSection";
import { useState } from "react";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Search />
      <WeatherSection />
    </>
  );
};

export default MainPage;
