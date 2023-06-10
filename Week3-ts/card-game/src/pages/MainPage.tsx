import Header from "../components/header";
import CardGame from "../components/cardGame";
import Level from "../components/level";
import { useState } from "react";
import React from "react";
import {
  useRecoilState,
  useRecoilValue,
} from "../../node_modules/recoil/index";
import { mainGameAtom } from "../recoil/atoms";

export const MainPage = () => {
  const curLevel = useRecoilValue(mainGameAtom);
  const nowScore = useRecoilValue(mainGameAtom);
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
