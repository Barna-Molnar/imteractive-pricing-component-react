import React from 'react';
import styled from 'styled-components';
import BackPattern from '../images/pattern-circles.svg';

const TitleStyles = styled.div`
  background: url(${BackPattern}) no-repeat center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 4rem;
  h1 {
    font-size: 2.2rem;
    color: var(--dark-blue);
  }
  p {
    font-size: 12px;
    color: var(--grayish-blue-text);
  }
`;

export default function Title() {
  return (
    <TitleStyles>
      <h1>Simple, traffic-based pricing</h1>
      <p>Sign-up for our 30-day trial. No credit card required. </p>
    </TitleStyles>
  );
}
