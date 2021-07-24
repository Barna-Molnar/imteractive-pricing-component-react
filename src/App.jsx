import React from 'react';
import styled from 'styled-components';
import BackgroundImg from './images/bg-pattern.svg';
import Title from './components/Title';
const AppStlyes = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
  background: url(${BackgroundImg}) no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppStlyes>
      <div className="container">
        <Title />
      </div>
    </AppStlyes>
  );
}

export default App;
