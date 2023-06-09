import Header from "../components/Header";
import CardGame from "../components/CardGame";
import Level from "../components/level";
import { useState } from "react";
import React from "react";

export const MainPage = () => {
  const [nowScore, setNowScore] = useState(0);
  const [curLevel, setCurLevel] = useState("Easy");

  return (
    <>
      <Header nowScore={nowScore} curLevel={curLevel} />
      <Level curLevel={curLevel} setCurLevel={setCurLevel} />
      <CardGame
        curLevel={curLevel}
        nowScore={nowScore}
        setNowScore={setNowScore}
      ></CardGame>
    </>
  );
};
