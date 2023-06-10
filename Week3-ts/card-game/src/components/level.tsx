import styled from "styled-components";
import React from "react";
import { curLevelSelector } from "../recoil/selector";
import { useRecoilState } from "recoil";

export const Level = () => {
  const [curLevel, setCurLevel] = useRecoilState(curLevelSelector);
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
