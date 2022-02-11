import styled from 'styled-components';
import { useState } from 'react';

export default function Search({ props }) {
  const { Searcher } = require('fast-fuzzy');
  const [userInput, setUserInput] = useState('');
  const searcher = new Searcher(props.message);
  searcher.search(userInput); //returns array

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  return (
    <SearchContainer>
      <label>
        What do you want to buy?
        <SearchInput onChange={handleUserInput}></SearchInput>
      </label>
    </SearchContainer>
  );
}

const SearchInput = styled.input`
  width: 100%;
  margin: 5px 0;
`;

const SearchContainer = styled.section`
  display: grid;
  gap: 10px;
`;
