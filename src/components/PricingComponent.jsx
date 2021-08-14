import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ToggleButton from './ToggleButton';
import check from '../images/icon-check.svg';
import Slider from './Slider';

const PricingComponentStyles = styled.div`
  background-color: var(--component-background);
  min-height: 300px;
  max-width: 400px;
  box-shadow: 2px 0px 45px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  .container {
    display: flex;
    flex-direction: column;

    padding: 3rem 4rem;
    width: 100%;
    height: 66%;
    border-bottom: 1px solid var(--color-empty-slider-bar);
    .header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;

      &__pageView {
        color: var(--grayish-blue-text);
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: uppercase;
      }
      &__month {
        display: flex;
        align-items: center;
        color: var(--grayish-blue-text);
        font-size: 12px;
        .cost {
          color: var(--dark-blue);
          font-size: 3rem;
          font-weight: 800;
          margin-right: 1rem;
        }
      }
    }
    .payment {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      color: var(--grayish-blue-text);
      margin-top: 2rem;
      font-size: 9px;

      &--discount {
        padding: 2px 6px;
        border-radius: 10px;
        color: var(--discount-text);
        background-color: var(--discount-background);
        margin: 0 1rem;
      }
    }
  }
  .container > *:not(:last-child) {
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .container {
      padding: 3rem 2rem;
      .header {
        flex-direction: column;
        &__pageView {
          font-size: 13px;
        }

        &__month {
          order: 3;
          margin-top: 4rem;
          font-size: 15px;
          font-weight: 600;
        }
      } // header end
      .payment {
        font-size: 12px;

        &--discount {
          margin: 0 0 0 0.5rem;
          span {
            display: none;
          }
        }
      }
    }
  }
`;

export default function PricingComponent() {
  const [sliderValue, setSliderValue] = useState((16).toFixed(2));
  return (
    <PricingComponentStyles>
      <div className="container">
        <div className="header">
          <p className="header__pageView">100k Pageviews</p>
          <p className="header__month">
            <span className="cost"> ${sliderValue} </span>/ month
          </p>
          <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        </div>
        <div className="payment">
          <p className="payment--type">Monthly Billing</p>
          <ToggleButton />
          <p className="payment--type">Yearly Billing</p>
          <p className="payment--discount">
            -25% <span>discount</span>
          </p>
        </div>
      </div>

      <Footer checkImg={check} />
    </PricingComponentStyles>
  );
}
