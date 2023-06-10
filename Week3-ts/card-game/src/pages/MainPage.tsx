import Header from "../components/header";
import CardGame from "../components/cardGame";
import Level from "../components/level";
import { useState } from "react";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { mainGameAtom } from "../recoil/atoms";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Level />
      <CardGame></CardGame>
    </>
  );
};
