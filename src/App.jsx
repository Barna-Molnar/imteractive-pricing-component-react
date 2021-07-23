import React from 'react';
import styled from 'styled-components';

const AppStlyes = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppStlyes>
      <h1>hell from the main app </h1>
    </AppStlyes>
  );
}

export default App;
