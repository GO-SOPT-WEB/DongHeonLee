import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./card";
import { EasyList, NormalList, HardList } from "../utils/makeDataList";
import React from "react";
import { DataType } from "../utils/dataType";

let cardList = EasyList;

interface CardGameProps {
  nowScore: number;
  curLevel: string;
  setNowScore: React.Dispatch<React.SetStateAction<number>>;
}

const CardGame = (props: CardGameProps) => {
  const { curLevel, nowScore, setNowScore } = props;
  //레벨에 따라 리스트 변경
  switch (curLevel) {
    case "Easy":
      cardList = EasyList;
      break;
    case "Normal":
      cardList = NormalList;
      break;
    case "Hard":
      cardList = HardList;
      break;
  }

  const [clickedCardList, setClickedCardList] = useState<DataType[]>([]);
  const [clickedIdList, setClickedIdList] = useState<number[]>([]);

  // 카드 클릭 시 작동할 로직
  useEffect(() => {
    if (clickedCardList.length === 2) {
      if (clickedCardList[0] === clickedCardList[1]) {
        clickedCardList[0].corrected = true;
        setNowScore((prev) => prev + 1);
      }
      setTimeout(() => {
        setClickedCardList([]);
        setClickedIdList([]);
      }, 700);
    }
  }, [clickedCardList]);

  // 레벨 바뀌면 초기화.
  useEffect(() => {
    setClickedCardList([]);
    setClickedIdList([]);
    setNowScore(0);
    cardList.forEach((card) => {
      card.corrected = false;
    });
  }, [curLevel]);

  //카드 클릭시 state 변경
  const clickCard = (card: DataType, idx: number) => {
    setClickedCardList([...clickedCardList, card]);
    setClickedIdList([...clickedIdList, idx]);
  };

  return (
    <CardsContainer>
      {cardList.map((card, idx) => {
        return (
          <CardWrapper key={`${card.id}-${idx}`} id={idx} clasName={card.id}>
            <Card
              card={card}
              idx={idx}
              clickCard={clickedIdList.length < 2 ? clickCard : null}
              isFlipped={clickedIdList.includes(idx) || card.corrected}
            />
          </CardWrapper>
        );
      })}
    </CardsContainer>
  );
};

const CardsContainer = styled.main`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: lightgray;
`;

const CardWrapper = styled.article`
  /* width: 100%;
  height: 100%; */
`;

export default CardGame;
