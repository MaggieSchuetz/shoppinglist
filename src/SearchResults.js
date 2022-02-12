import styled from 'styled-components';
import ListItem from './ListItem.js';

export default function SearchResults({
  shoppingList,
  setShoppingList,
  filteredResults,
  userInput,
  setUserInput,
}) {
  return (
    <SearchResultsContainer>
      {filteredResults
        .filter(item => !shoppingList.includes(item))
        .map((item, index) => (
          <ListItem
            item={item}
            key={index}
            handleItemClick={() => {
              addItemToList(item);
              setUserInput(() => '');
            }}
          />
        ))}
      {filteredResults.length === 0 && userInput.length !== 0 && (
        <p>No machting items found.</p>
      )}
    </SearchResultsContainer>
  );

  function addItemToList(item) {
    setShoppingList([...shoppingList, item]);
  }
}

const SearchResultsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
