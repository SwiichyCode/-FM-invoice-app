import React from "react";
import styled from "styled-components";
import emptyImg from "../../../assets/illustration-empty.svg";

export default function UsersEmpty() {
  return (
    <UsersEmptyWrapper>
      <img src={emptyImg} alt="emptyImg" />
      <h2>There is nothing here</h2>
      <p className="body1">
        Create an invoice by clicking the{" "}
        <span className="secondaryH3">New Invoice</span> button and get started
      </p>
    </UsersEmptyWrapper>
  );
}

const UsersEmptyWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  img {
    padding-bottom: 64px;
  }

  h2 {
    padding-bottom: 24px;
  }

  p {
    max-width: 220px;
    text-align: center;
    color: var(--k);
  }
`;
