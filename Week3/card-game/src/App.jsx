import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header nowScore={0} difficulty={5} />
    </>
  );
}

export default App;
