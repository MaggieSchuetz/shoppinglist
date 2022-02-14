// import { useEffect } from 'react';
import styled from 'styled-components';
//import { useImmer } from 'use-immer';
import Search from './Search.js';
import ShoppingList from './ShoppingList.js';
import useLocalStorage from './Hooks/useLocalStorage';

function App() {
  const [shoppingList, setShoppingList] = useLocalStorage(
    'localShoppingList',
    []
  );

  // useEffect(() => {
  //   setShoppingList(
  //     JSON.parse(localStorage.getItem('localShoppingList') || [])
  //   );
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('localShoppingList', JSON.stringify(shoppingList));
  // }, [shoppingList]);

  return (
    <AppGrid>
      <Heading>Personal Shopping List</Heading>
      <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <Search shoppingList={shoppingList} onsetShoppingList={setShoppingList} />
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
