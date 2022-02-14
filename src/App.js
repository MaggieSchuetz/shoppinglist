// import { useEffect } from 'react';
import styled from 'styled-components';
//import { useImmer } from 'use-immer';
import Search from './Search.js';
import ShoppingList from './ShoppingList.js';
import useLocalStorage from './Hooks/useLocalStorage';
import useToggle from './Hooks/useToggle.js';

function App() {
  const [shoppingList, setShoppingList] = useLocalStorage(
    'localShoppingList',
    []
  );

  const [isShoppingDone, setIsShoppingDone] = useToggle();

  return (
    <AppGrid>
      <Heading>Personal Shopping List</Heading>
      <ShoppingList
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />
      <Search shoppingList={shoppingList} onsetShoppingList={setShoppingList} />
      <button onClick={setIsShoppingDone}>
        {isShoppingDone ? 'Ja! 👍' : 'Nein... 😣'}
      </button>
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
