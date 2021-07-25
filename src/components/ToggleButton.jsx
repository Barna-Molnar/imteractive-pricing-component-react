import React from 'react';
import styled from 'styled-components';

const ToggleButtonStyles = styled.div`
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
`;

export default function ToggleButton() {
  return (
    <div>
      <div class="switch__container">
        <label class="switch">
          <input type="checkbox" /> <div></div>
        </label>
      </div>
    </div>
  );
}
