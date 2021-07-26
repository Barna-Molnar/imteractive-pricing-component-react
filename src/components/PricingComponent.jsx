import React, { useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ToggleButton from './ToggleButton';
import check from '../images/icon-check.svg';
import Slider from './Slider';

const PricingComponentStyles = styled.div`
  img {
    width: 50px;
  }
  background-color: var(--component-background);
  height: 300px;
  width: 400px;
  box-shadow: 2px 0px 45px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  .container {
    width: 100%;
    height: 66%;
    border-bottom: 1px solid var(--color-empty-slider-bar);
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
  }
`;

export default function PricingComponent() {
  const [sliderValue, setSliderValue] = useState(16);
  return (
    <PricingComponentStyles>
      {/* <img src={IconSlider} alt="" /> */}
      <div className="container">
        <div className="header">
          <p className="header__pageView">100k Pageviews</p>
          <p className="header__month">
            <span className="cost"> $ {sliderValue} </span>
            /month
          </p>
        </div>
        <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
        <div className="payment">
          <p className="payment--type">Monthly Billing</p>
          <ToggleButton />
          <p className="payment--type">Yearly Billing</p>
        </div>
      </div>

      <Footer checkImg={check} />
    </PricingComponentStyles>
  );
}
