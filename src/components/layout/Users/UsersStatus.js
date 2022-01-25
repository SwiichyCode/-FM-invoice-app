import React from "react";
import styled from "styled-components";
import arrowRight from "../../../assets/icon-arrow-right.svg";
import useUpdateMedia from "../../../hooks/useUpdateMedia";
import { breakpoints } from "../../../context/media";

export default function UsersStatus({ user }) {
  return (
    <UsersStatusWrapper>
      <div className={user.status + " " + "contentStatus"}>
        <span className="circle-status"></span>
        <span className="status">{user.status}</span>
      </div>
      {useUpdateMedia(768) ? (
        <div className="contentArrow">
          <img src={arrowRight} alt="arrowRight" />
        </div>
      ) : (
        false
      )}
    </UsersStatusWrapper>
  );
}

const UsersStatusWrapper = styled.li`
  display: flex;
  align-items: center;

  .contentStatus {
    width: 10.3rem;
    height: 4.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.6rem;
    ${breakpoints("margin-right", "rem", [{ 4000: 2 }, { 700: 0 }])}
  }
  .circle-status {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
  }

  .status {
    font-weight: bold;
    font-size: 1.2rem;
    line-height: 1.5rem;
    text-transform: capitalize;
    padding-left: 0.8rem;
  }

  .paid {
    color: var(--p);
    background: ${(props) => props.theme.user_StatusPaidBg};
  }

  .paid .circle-status {
    background: var(--p);
  }

  .pending {
    color: var(--r);
    background: ${(props) => props.theme.user_StatusPendingBg};
  }

  .pending .circle-status {
    background: var(--r);
  }

  .draft {
    color: ${(props) => props.theme.user_StatusDraft};
    background: ${(props) => props.theme.user_StatusDraftBg};
  }

  .draft .circle-status {
    background: ${(props) => props.theme.user_StatusDraft};
  }
`;
