import React from "react";
import { v4 as uuidv4 } from "uuid";

import { RemoveButton } from "../../../styles/controllers/buttons";
import { Wrapper, Title, ListHeader, Column, EmptyResult, Row } from "./styles";

const component = ({ users, removeUser, listSchema }) => {
  const displayUserId = uid => {
    return uid.length > 3 ? uid.substring(0, 3) : uid;
  };

  const handleRemoveButtonClick = uid => () => {
    removeUser({ uid });
  };

  return (
    <Wrapper>
      <Title>Users</Title>
      <ListHeader>
        {listSchema.map(col => (
          <Column key={col.displayName}>{col.displayName}</Column>
        ))}
      </ListHeader>
      {users.map(u => (
        <Row key={uuidv4()}>
          <Column>{displayUserId(u.uid)}...</Column>
          <Column>{u.firstName}</Column>
          <Column>{u.lastName}</Column>
          <Column>{u.email}</Column>
          <Column>{u.gender}</Column>
          <Column>{u.timezone}</Column>
          <Column>
            <RemoveButton onClick={handleRemoveButtonClick(u.uid)}>Remove</RemoveButton>
          </Column>
        </Row>
      ))}

      {users.length === 0 && <EmptyResult>No users found</EmptyResult>}
    </Wrapper>
  );
};

export default component;
