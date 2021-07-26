import React from 'react';
import styled from 'styled-components';

const ToggleButtonStyles = styled.div`
  input[type='checkbox'] {
    position: relative;
    width: 4rem;
    height: 1.8rem;
    -webkit-appearance: none;
    background: var(--toggle-background);
    outline: none;
    transition: 0.5s;
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  }
  input:checked[type='checkbox'] {
    background: var(--soft-cyan);
  }

  input[type='checkbox']:before {
    content: '';
    position: absolute;
    left: 2px;
    top: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  input:checked[type='checkbox']:before {
    left: 2.6rem;
  }
`;

export default function ToggleButton() {
  return (
    <ToggleButtonStyles>
      <input type="checkbox" />
    </ToggleButtonStyles>
  );
}
