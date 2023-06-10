import styled from "styled-components";
import React from "react";

interface LevelProps {
  curLevel: string;
  setCurLevel: React.Dispatch<React.SetStateAction<string>>;
}

export const Level = (props: LevelProps) => {
  const { curLevel, setCurLevel } = props;
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

interface ButtonProps {
  innerText: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = (props: ButtonProps) => {
  const { innerText, onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      {innerText}
    </button>
  );
};

const BtnWrapper = styled.div`
  background-color: gray;
`;
