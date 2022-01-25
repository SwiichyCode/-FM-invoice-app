import React from "react";
import styled from "styled-components";
import iconPlus from "../../../assets/icon-plus.svg";
import { breakpoints } from "../../../context/media";

export default function HeaderBtn({ useUpdateMedia, handleToggle }) {
  return (
    <HeaderBtnWrapper onClick={handleToggle}>
      <div className="iconContainer">
        <img src={iconPlus} alt="iconPlus" />
      </div>
      {useUpdateMedia(768) ? (
        <span className="secondaryH3">New Invoice</span>
      ) : (
        <span className="secondaryH3">New</span>
      )}
    </HeaderBtnWrapper>
  );
}

const HeaderBtnWrapper = styled.button`
  width: 15rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  color: var(--o);
  border: none;
  border-radius: 24px;
  background: var(--a);
  cursor: pointer;
  font-family: "Spartan", sans-serif;
  transition: all 200ms ease-in-out;
  ${breakpoints("margin-left", "rem", [{ 4000: 4 }, { 768: 1.8 }])}
  ${breakpoints("width", "rem", [{ 4000: 15 }, { 768: 9 }])}

  &:hover {
    background: var(--b);
  }

  .iconContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    background: var(--o);
    margin-left: 0.8rem;
    ${breakpoints("margin-right", "rem", [{ 4000: 1.6 }, { 768: 0.8 }])}
  }
`;
