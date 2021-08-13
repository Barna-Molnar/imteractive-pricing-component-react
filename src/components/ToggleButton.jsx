import React from 'react';
import styled from 'styled-components';

const ToggleButtonStyles = styled.div`
  display: flex;
  input[type='checkbox'] {
    position: relative;
    width: 3rem;
    height: 1.7rem;
    -webkit-appearance: none;
    background: var(--toggle-background);
    outline: none;
    transition: 0.5s;
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.4);
    margin: 0 1rem 0 1rem;
  }
  input:checked[type='checkbox'] {
    background: var(--soft-cyan);
    box-shadow: inset 0 0 5px hsla(174, 86%, 45%, 1);
  }

  input[type='checkbox']:before {
    content: '';
    position: absolute;
    left: 3px;
    top: 3px;
    width: 10px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
  input:checked[type='checkbox']:before {
    left: 1.7rem;
  }
`;

export default function ToggleButton() {
  return (
    <ToggleButtonStyles>
      <input type="checkbox" />
    </ToggleButtonStyles>
  );
}
