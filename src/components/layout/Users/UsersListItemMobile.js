import React from "react";
import styled from "styled-components";
import UsersStatus from "./UsersStatus";

export default function UsersListItemMobile({ user, dateGestion, separator }) {
  return (
    <UserListItemWrapperMobile>
      <li className="userTopSide">
        <span className="user_id secondaryH3">
          <span>#</span>
          {user.id}
        </span>
        <span className="user_clientName body1">{user.clientName}</span>
      </li>
      <li className="userBotSide">
        <div className="userBotSideD">
          <span className="user_paymentDue body1">
            Due {dateGestion(user.paymentDue)}
          </span>
          <span className="user_total h3">
            £ {separator(user.total.toFixed(2))}
          </span>
        </div>
        <UsersStatus user={user} />
      </li>
    </UserListItemWrapperMobile>
  );
}

const UserListItemWrapperMobile = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 2.4rem;
  background: ${(props) => props.theme.user_cardBg};
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  box-sizing: border-box;
  border-radius: 8px;

  .userTopSide,
  .userBotSide {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .userTopSide {
    padding-bottom: 2.4rem;
  }

  .userBotSideD {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
  }
`;
