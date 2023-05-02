import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CardGame from "./components/cardGame";

function App() {
  return (
    <>
      <Header nowScore={0} difficulty={5} />
      <CardGame></CardGame>
    </>
  );
}

export default App;
