import Imgs from "../assets/index";
import styled from "styled-components";

// let Box = styled.div`
//   diplay: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-item: center;
// `;

const Front = styled.div``;

const CardImg = styled.img`
  width: 15rem;
  height: 15rem;
  background-color: white;
`;

const Card = () => {
  return (
    <article>
      <Front>
        <CardImg src={Imgs.ONE} alt="1번" />
      </Front>
    </article>
  );
};

export default Card;
