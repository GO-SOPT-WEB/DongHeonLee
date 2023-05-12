import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import myStore from "../store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { area, setArea } = myStore();

  const handleChange = (e) => {
    setArea(e.target.value);
  };
  const submit = () => {
    navigate(`/${area}`);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    submit();
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <p>검색기능</p>
      <input
        name="area"
        placeholder="영어로 도시명을 입력해주세요."
        value={area}
        onChange={handleChange}
        type="text"
      />
      <button type="submit" onClick={() => submit()}>
        검색
      </button>
    </form>
  );
};

export default Search;
