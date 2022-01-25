import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../../context/media";
import Filter from "./Filter";
import HeaderTotal from "./HeaderTotal";
import HeaderBtn from "./HeaderBtn";
import useUpdateMedia from "../../../hooks/useUpdateMedia";

export default function Header({ users, handleToggle }) {
  return (
    <HeaderWrapper>
      <HeaderTotal useUpdateMedia={useUpdateMedia} users={users} />
      <div className="headerRight">
        <Filter useUpdateMedia={useUpdateMedia} />
        <HeaderBtn
          useUpdateMedia={useUpdateMedia}
          handleToggle={handleToggle}
        />
      </div>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${breakpoints("max-width", "px", [{ 4000: 730 }, { 768: 672 }])}
  ${breakpoints("padding-left", "rem", [{ 4000: (0, 4.8) }, { 768: (0, 2.4) }])}
  ${breakpoints("padding-right", "rem", [
    { 4000: (0, 4.8) },
    { 768: (0, 2.4) },
  ])}
  ${breakpoints("margin-bottom", "rem", [{ 4000: 6.5 }, { 768: 3.2 }])}
  ${breakpoints("margin-top", "rem", [{ 4000: 7.2 }, { 768: 3.2 }])}

  .headerRight {
    display: flex;
    align-items: center;
  }
`;
