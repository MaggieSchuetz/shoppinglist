import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Search from './Search.js';
function App() {
  const [items, setItems] = useState([]);
  const [hasError, setHasError] = useState(false);

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
        console.log(items);
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
      <Search message={items} />
    </AppGrid>
  );
}

export default App;

const AppGrid = styled.main`
  display: grid;
  gap: 5px;
`;
