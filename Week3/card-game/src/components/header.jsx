import styled from "styled-components";

// let Box = styled.div`
//   diplay: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-item: center;
// `;

const Header = ({ nowScore, difficulty }) => {
  return (
    <>
      <h1>숫자맞추기 게임</h1>
      <button>Reset</button>
      <p>
        {nowScore}/{difficulty}
      </p>
    </>
  );
};

export default Header;
