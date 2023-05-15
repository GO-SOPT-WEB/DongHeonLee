import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({ type: "today", area: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    navigate(`/${values.type}/${values.area}`);
  };

  useEffect(() => {
    if (values.area !== "") {
      navigate(`/${values.type}/${values.area}`);
    }
  }, [values.type]);

  return (
    <form onSubmit={handleSubmit}>
      <p>검색기능</p>
      <select name="type" onChange={handleChange} value={values.type}>
        <option value="today">오늘</option>
        <option value="week">주간</option>
      </select>
      <input
        name="area"
        placeholder="영어로 도시명을 입력해주세요."
        value={values.area}
        onChange={handleChange}
        type="text"
      />
      <button type="submit">검색</button>
    </form>
  );
};

export default Search;
