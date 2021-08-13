import React from 'react';
import styled from 'styled-components';
import BackPattern from '../images/pattern-circles.svg';

const TitleStyles = styled.div`
  /* background: url(${BackPattern}) no-repeat center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 4rem;
  position: relative;
  z-index: 0;
  margin-top: 12rem;
  margin-bottom: 3rem;
  img {
    width: 120px;
    z-index: 1;
    position: absolute;
  }
  h1 {
    font-size: 2.2rem;
    color: var(--dark-blue);
    margin-bottom: 0.5rem;
    z-index: 2;
  }
  .para {
    display: flex;
    p {
      font-size: 12px;
      color: var(--grayish-blue-text);
      z-index: 2;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-top: 6rem;
    text-align: center;
    padding: 4rem 0rem;
    h1 {
      font-size: 2rem;
    }
    .para {
      flex-direction: column;
    }
    img {
      width: 140px;
    }
  }
`;

export default function Title() {
  return (
    <TitleStyles>
      <img src={BackPattern} alt="" />
      <h1>Simple, traffic-based pricing</h1>
      <div className="para">
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </div>
    </TitleStyles>
  );
}
