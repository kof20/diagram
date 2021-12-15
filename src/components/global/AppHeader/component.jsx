import React from "react";

import { Wrapper, Container, CustomLink, LogoutButton } from "./styles";

const component = ({ logout, loggedIn }) => {
  return (
    <Wrapper>
      <Container>
        <CustomLink to="/">All Users</CustomLink>
        <CustomLink to="/chart">Chart</CustomLink>
        {loggedIn ? (
          <LogoutButton onClick={logout}>Log out</LogoutButton>
        ) : (
          <CustomLink to="login">Login</CustomLink>
        )}
      </Container>
    </Wrapper>
  );
};

export default component;
