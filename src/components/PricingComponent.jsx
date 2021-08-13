import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ToggleButton from './ToggleButton';
import check from '../images/icon-check.svg';
import Slider from './Slider';

const PricingComponentStyles = styled.div`
  background-color: var(--component-background);
  height: 300px;
  width: 400px;
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
      justify-content: space-between;
      align-items: center;

      &__pageView {
        color: var(--grayish-blue-text);
        font-size: 12px;
        text-transform: uppercase;
      }
      &__month {
        display: flex;
        align-items: center;
        color: var(--grayish-blue-text);
        font-size: 12px;
        .cost {
          color: var(--dark-blue);
          font-size: 3.3rem;
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
        margin-right: 1rem;
        margin-left: 1rem;
      }
    }
  }
  .container > * {
    margin-bottom: 2rem;
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
        </div>
        <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <div className="payment">
          <p className="payment--type">Monthly Billing</p>
          <ToggleButton />
          <p className="payment--type">Yearly Billing</p>
          <p className="payment--discount">25% discount</p>
        </div>
      </div>

      <Footer checkImg={check} />
    </PricingComponentStyles>
  );
}
