import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import UserList from "../pages/UserList";
import Login from "../pages/Login";
import Chart from "../pages/Chart";

import AppHeader from "../components/global/AppHeader";

import { Wrapper, GlobalStyles } from "./styles";

const component = ({ loggedIn }) => (
  <Wrapper>
    <GlobalStyles />
    <AppHeader />
    <Routes>
      <Route path="/*" element={<UserList />} />
      <Route path="login/*" element={loggedIn ? <Navigate to="/" /> : <Login />} />
      <Route path="chart/*" element={<Chart />} />
    </Routes>
  </Wrapper>
);

export default component;
