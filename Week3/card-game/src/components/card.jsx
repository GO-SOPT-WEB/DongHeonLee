import IMG_DATA from "../assets/index";
import styled from "styled-components";

const Card = ({ idx, card }) => {
  return (
    <article>
      <Front>
        <CardImg src={card.imgSrc} />
      </Front>
    </article>
  );
};

const Front = styled.div``;

const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
  background-color: white;
`;

export default Card;
