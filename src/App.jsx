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
    max-width: 400px;
    margin: 5rem auto;
  }
  @media only screen and (max-width: 768px) {
    .container-outer {
      width: 100%;
      margin: 0 2rem;
      /* padding: 0 2rem; */
    }
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
