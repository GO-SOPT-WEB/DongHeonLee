import Header from "../components/Header";
import Search from "../components/Search";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Search />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainPage;
