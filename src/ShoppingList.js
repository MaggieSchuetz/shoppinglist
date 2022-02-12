import styled from 'styled-components';
import ListItem from './ListItem.js';

export default function ShoppingList({ shoppingList, updateShoppingList }) {
  return (
    <ShoppingListContainer>
      {shoppingList.map((item, index) => (
        <ListItem
          item={item}
          key={index}
          handleItemClick={() => {
            updateShoppingList(draft => {
              draft.splice(index, 1);
            });
          }}
        />
      ))}
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
