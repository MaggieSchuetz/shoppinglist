import styled from 'styled-components';

export default function Results({ item, handleItemClick }) {
  return <ItemButton onClick={handleItemClick}>{item}</ItemButton>;

}

const ItemButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 4px 8px;
  color: white;
  background-color: slateblue;
`;
