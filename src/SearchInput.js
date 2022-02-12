import styled from 'styled-components';

export default function SearchInput({ onSetUserInput }) {
  return (
    <label>
      What do you want to buy?
      <UserInput
        onChange={e => {
          onSetUserInput(e.target.value);
        }}
      />
    </label>
  );
}

const UserInput = styled.input`
  width: 100%;
  margin: 5px 0 15px 0;
  padding: 5px;
`;
