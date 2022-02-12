import styled from 'styled-components';
import { useState } from 'react';
import Search from './Search.js';
import ShoppingList from './ShoppingList.js';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  return (
    <AppGrid>
      <Heading>Personal Shopping List</Heading>
      <ShoppingList shoppingList={shoppingList} />
      <Search shoppingList={shoppingList} onSetShoppingList={setShoppingList} />
    </AppGrid>
  );
}

export default App;

const AppGrid = styled.main`
  height: 100vh;
  display: grid;
  grid-template-rows: 48px 1fr 2fr;
  gap: 20px;
`;

const Heading = styled.h1`
  padding-top: 10px;
  text-align: center;
  font-size: 1.5em;
`;
