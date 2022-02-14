import styled from 'styled-components';
import ListItem from './ListItem.js';

export default function ShoppingList({ shoppingList, setShoppingList }) {
  return (
    <ShoppingListContainer>
      {shoppingList.map((item, index) => (
        <ListItem
          item={item}
          key={index}
          handleItemClick={() => {
            setShoppingList([
              ...shoppingList.slice(0, index),
              ...shoppingList.slice(index + 1),
            ]);
          }}
        />
      ))}
      {console.log(shoppingList)}
    </ShoppingListContainer>
  );
}

const ShoppingListContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: flex-start;
  align-content: flex-start;
  overflow-y: scroll;
`;
