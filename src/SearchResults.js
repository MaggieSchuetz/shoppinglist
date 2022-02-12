import styled from 'styled-components';
import ListItem from './ListItem.js';

export default function SearchResults({
  shoppingList,
  setShoppingList,
  filteredResults,
}) {
  return (
    <SearchResultsContainer>
      {filteredResults
        .filter(item => !shoppingList.includes(item))
        .map((item, index) => (
          <ListItem
            item={item}
            key={index}
            handleItemClick={() => addItemToList(item)}
          />
        ))}
      <p hidden={filteredResults.length !== 0}>No matching items are found.</p>
    </SearchResultsContainer>
  );

  function addItemToList(item) {
    console.log('vorher' + item);
    setShoppingList([...shoppingList, item]);
  }
}

const SearchResultsContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
