import React from 'react';
import styled from 'styled-components';

const PricingComponentStyles = styled.div`
  padding: 3rem 3rem;
  background-color: var(--component-background);
  height: 300px;
  width: 400px;
  box-shadow: 2px 0px 45px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  .header {
    display: flex;
    justify-content: space-between;

    &__pageView {
      color: var(--grayish-blue-text);
      font-size: 12px;
      text-transform: uppercase;
    }
  }
  .payment {
    //switch button
  }
`;

export default function PricingComponent() {
  return (
    <PricingComponentStyles>
      <div className="header">
        <p className="header__pageView">100k Pageviews</p>
        <p className="header__month">
          <span className="cost"> $ 16 </span>
          /month
        </p>
      </div>
      <div className="slider"></div>
      <div className="payment">
        <p className="payment--type">Monthly Billing</p>

        <p className="payment--type">Yearly Billing</p>
      </div>
      <div className="footer">
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button className="cta">Start my trial</button>
      </div>
    </PricingComponentStyles>
  );
}
