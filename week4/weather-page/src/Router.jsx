import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WeatherCard from "./components/WeatherCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path=":type">
            <Route path=":area" element={<WeatherCard />} />
          </Route>
        </Route>
        <Route path="/*" element={<div>404</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
