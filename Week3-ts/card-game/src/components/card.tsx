import IMG_DATA from "../assets/index";
import styled from "styled-components";
import { useState } from "react";
import React from "react";

const Card = ({ idx, card, clickCard, isFlipped }) => {
  const [isClicked, setIsClicked] = useState(false);

  const checkClickCard = () => {
    // 2개 이상 선택하지 않았고 중복 클릭이 아니면 함수 작동
    if (clickCard !== null && isClicked === false) {
      clickCard(card, idx);
      setIsClicked(true);
      setTimeout(() => {
        setIsClicked(false);
      }, 500);
    }
  };

  return (
    <CardWrap>
      <Front id={idx} onClick={checkClickCard}>
        <CardImg src={card.imgSrc} isFlipped={isFlipped} />
      </Front>
    </CardWrap>
  );
};

const CardWrap = styled.article`
  width: 15rem;
  height: 15rem;
  margin: 0.5rem;
  border-style: solid;
  background-color: black;
`;

const Front = styled.div`
  width: 100%;
  height: 100%;
`;

const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
  background-color: white;
  visibility: ${({ isFlipped }) => (isFlipped ? "visible" : "hidden")};
`;

export default Card;
