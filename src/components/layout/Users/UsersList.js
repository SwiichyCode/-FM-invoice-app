import React from "react";
import styled from "styled-components";
import UsersListItem from "./UsersListItem";
import UsersEmpty from "./UsersEmpty";
import { breakpoints } from "../../../context/media";

export default function UsersList({ users }) {
  // initialState.length = 2;

  return (
    <UsersListWrapper>
      {users.length > 0 ? (
        <ul className="usersList">
          {users.map((user) => {
            return <UsersListItem key={user.id} user={user} />;
          })}
        </ul>
      ) : (
        <UsersEmpty />
      )}
    </UsersListWrapper>
  );
}

const UsersListWrapper = styled.section`
  width: 100%;
  max-width: 730px;
  ${breakpoints("max-width", "px", [{ 4000: 730 }, { 768: 672 }])}
  ${breakpoints("padding-left", "rem", [{ 4000: (0, 4.8) }, { 768: (0, 2.4) }])}
  ${breakpoints("padding-right", "rem", [
    { 4000: (0, 4.8) },
    { 768: (0, 2.4) },
  ])}

  .usersList {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
  }
`;
