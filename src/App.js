import { useEffect } from 'react';
import styled from 'styled-components';
import { useImmer } from 'use-immer';
import Search from './Search.js';
import ShoppingList from './ShoppingList.js';

function App() {
  const [shoppingList, updateShoppingList] = useImmer([]);

  useEffect(() => {
    updateShoppingList(
      JSON.parse(localStorage.getItem('localShoppingList') || [])
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('localShoppingList', JSON.stringify(shoppingList));
  }, [shoppingList]);

  return (
    <AppGrid>
      <Heading>Personal Shopping List</Heading>
      <ShoppingList
        shoppingList={shoppingList}
        updateShoppingList={updateShoppingList}
      />
      <Search
        shoppingList={shoppingList}
        onupdateShoppingList={updateShoppingList}
      />
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
