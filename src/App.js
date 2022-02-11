import styled from 'styled-components';

function App() {
  return (
    <AppGrid>
      <h1>Shopping List</h1>
    </AppGrid>
  );
}

export default App;

const AppGrid = styled.main`
  display: grid;
  gap: 5px;
`;
