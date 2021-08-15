import styled from 'styled-components';
import IconSlider from '../images/icon-slider.svg';

const SliderStyles = styled.div`
  margin-top: 3rem;
  width: 100%;
  .slidecontainer {
    /* position: relative; */
    width: 100%;
    /* span {
    }
    span:before {
      content: '';
      position: absolute;
      top: 4px;
      left: 0;
      height: 7px;
      border-radius: 5px;
      width: ${(props) => (100 / 32) * props.sliderValue}%;
      background-color: var(--soft-cyan);
      color: red;
      z-index: 1;
    } */

    .slider {
      position: relative;
      -webkit-appearance: none;
      width: 100%;
      height: 7px;
      border-radius: 5px;
      background: var(--color-empty-slider-bar);
      outline: none;
      opacity: 0.7;
      -webkit-transition: 0.2s;
      transition: opacity 0.2s;
    }

    .slider::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 7px;
      border-radius: 5px;
      width: ${(props) => (100 / 32) * props.sliderValue}%;
      background-color: var(--soft-cyan);
      z-index: -1;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border: 0;
      padding: 1.5rem;
      border-radius: 100rem;
      background: url(${IconSlider}) no-repeat center;
      background-color: var(--dark-cyan-slider);
      cursor: pointer;
      box-shadow: 0 15px 25px 5px hsla(174, 86%, 45%, 0.5);
      z-index: 10;
    }
    .slider::-moz-range-thumb {
      width: 5px;
      height: 5px;
      border: 0;
      padding: 1.5rem;
      border-radius: 100rem;
      background: url(${IconSlider}) no-repeat center;
      background-color: var(--dark-cyan-slider);
      cursor: pointer;
      box-shadow: 0 15px 25px 5px hsla(174, 86%, 45%, 0.5);
      z-index: 10;
    }

    .slider::-ms-thumb {
      width: 24px;
      height: 24px;
      border: 0;
      padding: 1.5rem;
      border-radius: 100rem;
      background: url(${IconSlider}) no-repeat center;
      background-color: var(--dark-cyan-slider);
      cursor: pointer;
      box-shadow: 0 15px 25px 5px hsla(174, 86%, 45%, 0.5);
      z-index: 10;
    }
    .slider::-webkit-slider-thumb:hover {
      background-color: hsl(
        174.06976744186048,
        93.4782608695652%,
        36.07843137254902%
      );
    }
  }
  @media only screen and (max-width: 768px) {
    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 30px;
      height: 30px;
      border: 0;
      padding: 2rem !important;
    }
  }
`;

export default function Slider({ sliderValue, setSliderValue }) {
  return (
    <SliderStyles sliderValue={sliderValue}>
      <div className="slidecontainer">
        <input
          type="range"
          min="1"
          max="32"
          defaultValue={sliderValue}
          step="0.01"
          className="slider"
          id="myRange"
          onChange={(e) => setSliderValue(e.target.value)}
        />
      </div>
    </SliderStyles>
  );
}
