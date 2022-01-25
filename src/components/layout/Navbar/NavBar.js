import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../context/media";
import NavBarLogo from "./NavBarLogo";
import NavBarNav from "./NavBarNav";

export default function NavBar() {
  return (
    <NavBarWrapper>
      <NavBarLogo />
      <NavBarNav />
    </NavBarWrapper>
  );
}

const NavBarWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 10.3rem;
  background: ${(props) => props.theme.navBackground};
  border-radius: 0 2rem 2rem 0;
  overflow: hidden;
  z-index: 97;

  ${breakpoints("height", "vh", [{ 4000: 100 }])}
  ${breakpoints("height", "rem", [{ 768: 8 }, { 375: 7.2 }])}

  @media screen and (max-width: 768px) {
    position: initial;
    flex-direction: initial;
    width: 100%;
    border-radius: initial;
  }
`;
