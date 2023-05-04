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

  return (
    <section>
      <CardsWrapper>
        {cardList.map((card, idx) => {
          return <Card idx={idx} card={card} />;
        })}
      </CardsWrapper>
    </section>
  );
};

const CardsWrapper = styled.main`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: lightgray;
`;

export default CardGame;
