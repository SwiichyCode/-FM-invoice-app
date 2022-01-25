import React from "react";
import styled from "styled-components";
import UsersStatus from "./UsersStatus";

export default function UsersListItemDesktop({ user, dateGestion, separator }) {
  return (
    <UserListItemWrapperDesktop>
      <li className="user_id secondaryH3">
        <span>#</span>
        {user.id}
      </li>
      <li className="user_paymentDue body1">
        Due {dateGestion(user.paymentDue)}
      </li>
      <li className="user_clientName body1">{user.clientName}</li>
      <li className="user_total h3">
        £ {separator(Number(user.total).toFixed(2))}
      </li>
      <UsersStatus user={user} />
    </UserListItemWrapperDesktop>
  );
}

const UserListItemWrapperDesktop = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 72px;
  background: ${(props) => props.theme.user_cardBg};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  box-sizing: border-box;
  border-radius: 8px;
  padding: 0 3.2rem;
  cursor: pointer;

  &:hover {
    border: 1px solid #7c5dfa;
  }
`;
