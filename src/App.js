import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Search from './Search.js';
import Results from './Results.js';

function App(searchInput) {
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);
  const { Searcher } = require('fast-fuzzy');
  const [userInput, setUserInput] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  console.log(shoppingList);

  const itemNames = items.map(item => item.name.en);
  const searcher = new Searcher(itemNames, { ignoreCase: true });
  //returns array
  const filteredItems = searcher.search(userInput);

  useEffect(() => {
    loadItems();
  }, []);
  async function loadItems() {
    try {
      const response = await fetch(
        'https://fetch-me.vercel.app/api/shopping/items'
      );
      if (response.ok) {
        const results = await response.json();
        setItems(results.data);
      } else {
        throw new Error('Error: 404 not found');
      }
    } catch (error) {
      setHasError(true);
    }
  }
  return (
    <AppGrid>
      <h1>Shopping List</h1>
      {hasError && <p>Error: could not load shopping items</p>}
      <ResultContainer>
        {shoppingList.map((item, index) => (
          <Results
            item={item}
            key={index}
            handleItemClick={() => addItemToList(item)}
          />
        ))}
      </ResultContainer>
      <Search
        value={userInput}
        handleUserInput={e => {
          setUserInput(e.target.value);
        }}
      />
      <ResultContainer>
        {filteredItems !== []
          ? filteredItems
              .filter(item => !shoppingList.includes(item))
              .map((item, index) => (
                <Results
                  item={item}
                  key={index}
                  handleItemClick={() => addItemToList(item)}
                />
              ))
          : alert('Nothing')}
      </ResultContainer>
    </AppGrid>
  );

  function addItemToList(item) {
    console.log('vorher' + item);
    setShoppingList([...shoppingList, item]);
  }
}

export default App;

const AppGrid = styled.main`
  display: grid;
  gap: 5px;
`;
const ResultContainer = styled.section`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
