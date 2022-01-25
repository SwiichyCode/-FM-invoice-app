import React from "react";
import styled from "styled-components";

export default function HeaderTotal({ useUpdateMedia, users }) {
  return (
    <HeaderTotalWrapper>
      <h1>Invoices</h1>
      {/* {useUpdateMedia(768) ? (
        <span className="body1">There are {users.length} total invoices</span>
      ) : (
        <span className="body1">{users.length} invoices</span>
      )} */}
    </HeaderTotalWrapper>
  );
}

const HeaderTotalWrapper = styled.div`
  padding-right: 2rem;

  h1 {
    color: ${(props) => props.theme.header_h1};
  }

  span {
    color: ${(props) => props.theme.header_total};
  }
`;
