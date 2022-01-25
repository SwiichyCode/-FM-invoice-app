import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import profileIcon from "../../../assets/image-avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { breakpoints } from "../../../context/media";
import { GlobalContext } from "../../../context/globalContext";

export default function NavBarNav() {
  const { theme, themeSwitchHandler } = useContext(GlobalContext);

  useEffect(() => {
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <NavBarNavWrapper>
      <div className="navTheme">
        <FontAwesomeIcon
          onClick={() =>
            themeSwitchHandler(theme === "dark" ? "light" : "dark")
          }
          icon={theme === "dark" ? faSun : faMoon}
          className="iconTheme"
        />
      </div>
      <div className="navLine"></div>
      <div className="navProfile">
        <img src={profileIcon} alt="profilIcon" />
      </div>
    </NavBarNavWrapper>
  );
}

const NavBarNavWrapper = styled.nav`
  display: flex;
  width: 100%;
  ${breakpoints("max-width", "rem", [{ 768: 19.3 }, { 375: 16.1 }])}
  ${breakpoints("flex-direction", "", [{ 4000: "column" }, { 768: "initial" }])}

  .navTheme,
  .navProfile {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 8.8rem;

    img {
      cursor: pointer;
    }
  }

  .iconTheme {
    font-size: 2rem;
    color: var(--g);
    cursor: pointer;
    transition: all 200ms ease-in-out;

    &:hover {
      color: var(--e);
    }
  }

  .navLine {
    width: 100%;
    height: 0.1rem;
    ${breakpoints("width", "rem", [{ 768: 0.2 }])}
    ${breakpoints("height", "", [{ 768: "auto" }])}
    background: var(--n);
  }

  .navProfile img {
    ${breakpoints("width", "rem", [{ 4000: 4 }, { 768: 3.2 }])}
    ${breakpoints("height", "rem", [{ 4000: 4 }, { 768: 3.2 }])}
    border-radius: 50%;
  }
`;
