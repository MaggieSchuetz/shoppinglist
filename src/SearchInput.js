import styled from 'styled-components';

export default function SearchInput({ userInput, onSetUserInput }) {
  return (
    <label>
      What do you want to buy?
      <UserInput
        onChange={e => {
          onSetUserInput(e.target.value);
        }}
        type="text"
        value={userInput}
      />
    </label>
  );
}

const UserInput = styled.input`
  width: 100%;
  margin: 5px 0 15px 0;
  padding: 5px;
`;
