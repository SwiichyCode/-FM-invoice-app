import React from "react";
import styled from "styled-components";
import headerLogo from "../../../assets/logo.svg";
import { breakpoints } from "../../../context/media";

export default function NavBarLogo() {
  return (
    <NavBarLogoWrapper>
      <img src={headerLogo} alt="logo" />
      <div className="logoPatern"></div>
    </NavBarLogoWrapper>
  );
}

const NavBarLogoWrapper = styled.div`
  position: relative;
  background: var(--a);
  border-radius: 0 2rem 2rem 0;
  overflow: hidden;

  ${breakpoints("width", "rem", [{ 4000: 10.3 }, { 768: 8 }, { 375: 7.2 }])}
  ${breakpoints("height", "rem", [{ 4000: 10.3 }, { 768: 8 }, { 375: 7.2 }])}

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 4rem;
    height: 3.8rem;
    z-index: 99;

    ${breakpoints("width", "rem", [{ 4000: 4 }, { 768: 3.1 }, { 375: 2.8 }])}
    ${breakpoints("height", "rem", [{ 4000: 4 }, { 768: 2.9 }, { 375: 2.6 }])}
  }

  .logoPatern {
    position: absolute;
    top: 50%;
    width: 10.3rem;
    height: 10.3rem;
    background: var(--b);
    border-radius: 0px 20px 20px 0px;
    transform: matrix(-1, 0, 0, 1, 0, 0);
    z-index: 98;
  }
`;
