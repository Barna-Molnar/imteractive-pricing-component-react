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
    .switch__container {
      height: 40px;
      text-align: center;

      /** Switch
 -------------------------------------*/

      .switch input {
        position: absolute;
        opacity: 0;
      }
      .switch {
        display: flex;
        align-items: center;
        font-size: 20px; /* 1 */
        height: 2rem;
        width: 4rem;
        background: #bdb9a6;
        border-radius: 1em;
        /*   padding: 0.25rem; */
      }

      .switch div {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 1.5rem;
        background: #fff;
        box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
        -webkit-transition: all 300ms;
        -moz-transition: all 300ms;
        transition: all 300ms;
      }

      .switch input:checked + div {
        -webkit-transform: translate3d(150%, 0, 0);
        -moz-transform: translate3d(150%, 0, 0);
        transform: translate3d(150%, 0, 0);
      }
    }
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
