import { useState } from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput.js';
import SearchResults from './SearchResults.js';
import useFetch from './Hooks/useFetch.js';

export default function Search({ shoppingList, onsetShoppingList }) {
  const [userInput, setUserInput] = useState('');
  const { Searcher } = require('fast-fuzzy');
  const { hasError, allItemsData } = useFetch();
  const itemNames = allItemsData.map(itemData => itemData.name.en);
  const searcher = new Searcher(itemNames, { ignoreCase: true });
  const filteredResults = searcher.search(userInput);

  return (
    <SearchContainer>
      <SearchInput onSetUserInput={setUserInput} userInput={userInput} />
      {hasError && <p>Error: could not load shopping items</p>}
      <SearchResults
        shoppingList={shoppingList}
        setShoppingList={onsetShoppingList}
        filteredResults={filteredResults}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.section`
  overflow-y: scroll;
`;
