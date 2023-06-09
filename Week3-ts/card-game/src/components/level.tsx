import styled from "styled-components";
import React from "react";

export const Level = ({ curLevel, setCurLevel }) => {
  return (
    <BtnWrapper>
      <Button
        innerText="Easy"
        onClick={() => {
          setCurLevel("Easy");
        }}
      />
      <Button
        innerText="Normal"
        onClick={() => {
          setCurLevel("Normal");
        }}
      />
      <Button
        innerText="Hard"
        onClick={() => {
          setCurLevel("Hard");
        }}
      />
    </BtnWrapper>
  );
};

export default Level;

const Button = ({ innerText, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {innerText}
    </button>
  );
};

const BtnWrapper = styled.div`
  background-color: gray;
`;
