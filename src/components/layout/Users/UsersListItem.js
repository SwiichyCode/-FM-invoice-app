import React from "react";
import styled from "styled-components";
import { dateGestion } from "../../../tools/dateGestion";
import { separator } from "../../../tools/separator";
import useUpdateMedia from "../../../hooks/useUpdateMedia";
import UsersListItemDesktop from "./UsersListItemDesktop";
import UsersListItemMobile from "./UsersListItemMobile";

export default function UsersListItem({ user }) {
  return (
    <UsersListItemWrapper>
      {useUpdateMedia(768) ? (
        <UsersListItemDesktop
          user={user}
          dateGestion={dateGestion}
          separator={separator}
        />
      ) : (
        <UsersListItemMobile
          user={user}
          dateGestion={dateGestion}
          separator={separator}
        />
      )}
    </UsersListItemWrapper>
  );
}

const UsersListItemWrapper = styled.section`
  .user_id,
  .user_total {
    color: ${(props) => props.theme.user_id_total};
    span {
      color: var(--g);
    }
  }

  .user_clientName {
    color: ${(props) => props.theme.user_name};
  }

  .user_paymentDue {
    color: ${(props) => props.theme.user_due};
  }
`;
