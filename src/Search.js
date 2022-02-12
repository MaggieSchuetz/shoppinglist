import { useState, useEffect } from 'react';
import SearchInput from './SearchInput.js';
import SearchResults from './SearchResults.js';

export default function Search({ shoppingList, onSetShoppingList }) {
  const [allItemsData, setAllItemsData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [userInput, setUserInput] = useState('');
  const { Searcher } = require('fast-fuzzy');
  const itemNames = allItemsData.map(itemData => itemData.name.en);
  const searcher = new Searcher(itemNames, { ignoreCase: true });
  const filteredResults = searcher.search(userInput);

  useEffect(() => {
    loadAllItems();
  }, []);

  async function loadAllItems() {
    try {
      const response = await fetch(
        'https://fetch-me.vercel.app/api/shopping/items'
      );
      if (response.ok) {
        const results = await response.json();
        setAllItemsData(results.data);
      } else {
        throw new Error('Error: 404 not found');
      }
    } catch (error) {
      setHasError(true);
    }
  }

  return (
    <section>
      <SearchInput onSetUserInput={setUserInput} userInput={userInput} />
      {hasError && <p>Error: could not load shopping items</p>}
      <SearchResults
        shoppingList={shoppingList}
        setShoppingList={onSetShoppingList}
        filteredResults={filteredResults}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </section>
  );
}
