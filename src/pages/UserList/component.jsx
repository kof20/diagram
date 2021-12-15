import React from "react";

import UserForm from "../../components/UserList/UserForm";
import List from "../../components/UserList/List";

import { Wrapper } from "./styles";

const component = () => (
  <Wrapper>
    <UserForm />
    <List />
  </Wrapper>
);

export default component;
