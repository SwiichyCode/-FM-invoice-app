import React from "react";
import styled from "styled-components";
import arrowDown from "../../../assets/icon-arrow-down.svg";

export default function Filter({ useUpdateMedia }) {
  return (
    <FilterWrapper>
      {useUpdateMedia(768) ? (
        <h3 className="secondaryH3">Filter by status</h3>
      ) : (
        <h3 className="secondaryH3">Filter</h3>
      )}
      <img src={arrowDown} alt="arrownDown" />
    </FilterWrapper>
  );
}

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  h3 {
    padding-right: 16px;
    color: ${(props) => props.theme.header_h1};
  }
`;
