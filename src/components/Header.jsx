import React, { useState } from 'react';
import Slider from './Slider';

export default function Header({ discount }) {
  const [sliderValue, setSliderValue] = useState((16).toFixed(2));
  return (
    <div>
      <div className="header">
        <p className="header__pageView">100k Pageviews</p>
        <p className="header__month">
          <span className="cost">
            ${!discount ? sliderValue : (sliderValue * 0.75).toFixed(2)}
          </span>
          / month
        </p>
        <Slider sliderValue={sliderValue} setSliderValue={setSliderValue} />
      </div>
    </div>
  );
}
