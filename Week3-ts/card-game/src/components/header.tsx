import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { mainGameAtom } from "../recoil/atoms";
import { curLevelSelector, nowScoreSelector } from "../recoil/selector";

export const Header = () => {
  const curLevel = useRecoilValue(curLevelSelector);
  const nowScore = useRecoilValue(nowScoreSelector);
  let totalScore = 5;
  switch (curLevel) {
    case "Easy":
      totalScore = 5;
      break;
    case "Normal":
      totalScore = 7;
      break;
    case "Hard":
      totalScore = 9;
      break;
  }
  return (
    <header>
      <h1>숫자맞추기 게임</h1>
      <button>Reset</button>
      <p>
        {nowScore}/{totalScore}
      </p>
    </header>
  );
};

export default Header;
