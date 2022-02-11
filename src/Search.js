import styled from 'styled-components';

export default function Search({ handleUserInput, searchInput }) {
  return (
    <SearchForm onSubmit={e => e.preventDefault()}>
      <label>
        What do you want to buy?
        <SearchInput
          onChange={handleUserInput}
        ></SearchInput>
      </label>
    </SearchForm>
  );
}

const SearchInput = styled.input`
  width: 100%;
  margin: 5px 0;
`;

const SearchForm = styled.form`
  display: grid;
  gap: 10px;
`;
