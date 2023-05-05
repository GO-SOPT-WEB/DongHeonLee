import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import { EasyList, NormalList, HardList } from "../utils/MakeDataList";

let cardList = EasyList;

const CardGame = ({ curLevel, nowScore, setNowScore }) => {
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

  const [clickedList, setClickedList] = useState([]);
  const [correctedList, setCorrectedList] = useState([]);

  // 카드 클릭 시 로직 처리를 위한 useEffect
  useEffect(() => {
    if (correctedList.length === 2) {
      if (correctedList[0] === correctedList[1]) {
        correctedList[0].corrected = true;
        setNowScore((prev) => prev + 1);
      }
      setTimeout(() => {
        setCorrectedList([]);
        setClickedList([]);
      }, 700);
    }
  }, [correctedList]);

  //카드 선택 시 관련 state를 바꿔주기 위한 함수, card 컴포넌트의 click 이벤트로 처리할 수 있게 넘겨준다
  const clickCard = (card, idx) => {
    setCorrectedList([...correctedList, card]);
    setClickedList([...clickedList, idx]);
  };

  // 레벨이 바뀌거나, 리셋되면 초기화하기 위한 useEffect
  useEffect(() => {
    setCorrectedList([]);
    setClickedList([]);
    setNowScore(0);
    cardList.forEach((card) => {
      card.corrected = false;
    });
  }, [curLevel]);

  return (
    <CardsContainer>
      {cardList.map((card, idx) => {
        return (
          <CardWrapper key={`${card.id}-${idx}`} id={idx} clasName={card.id}>
            <Card
              card={card}
              idx={idx}
              clickCard={clickedList.length < 2 ? clickCard : null}
              isFlipped={clickedList.includes(idx) || card.corrected}
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
width: 100%
height:100%
`;

export default CardGame;
