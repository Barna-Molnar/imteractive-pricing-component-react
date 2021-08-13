import React from 'react';
import styled from 'styled-components';
import BackgroundImg from './images/bg-pattern.svg';
import Title from './components/Title';
import PricingComponent from './components/PricingComponent';

const AppStlyes = styled.div`
  background-color: var(--main-background);
  width: 100vw;
  height: 100vh;
  background: url(${BackgroundImg}) no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  .container-outer {
    width: 400px;
    margin: 5rem auto;
  }
`;

function App() {
  return (
    <AppStlyes>
      <div className="container-outer">
        <Title />
        <PricingComponent />
      </div>
    </AppStlyes>
  );
}

export default App;
