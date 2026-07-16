import React from "react";
import styled from "styled-components";

const Checkbox = ({ checked, onChange }) => {
  return (
    <StyledWrapper>
      <label className="burger">
        <input type="checkbox" checked={checked} onChange={onChange} />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 15px;
    height: 13px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: white; /* Change to white if needed */
    border-radius: 10px;
    left: 0;
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-child(2) {
    top: 0;
    transform-origin: left center;
  }

  .burger span:nth-child(3) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-child(4) {
    bottom: 0;
    transform-origin: left center;
  }

  .burger input:checked ~ span:nth-child(2) {
    transform: rotate(45deg);
    width: 16px;
    top: -1px;
    left: 2px;
  }

  .burger input:checked ~ span:nth-child(3) {
    width: 0;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-child(4) {
    transform: rotate(-45deg);
    bottom: 0px;
    width: 16px;
    left: 2px;
  }
`;

export default Checkbox;
