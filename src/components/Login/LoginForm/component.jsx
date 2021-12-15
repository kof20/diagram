import React from "react";
import { Formik } from "formik";

import {
  Wrapper,
  Title,
  TextBox,
  Form,
  FormControl,
  FormLabel,
  FormInput,
  LoginButton,
  HelperText,
  LinkText,
} from "./styles";
import { userAccountsMock } from "../../../store/mocks/account.mocks";

const component = ({ login }) => {
  return (
    <Wrapper>
      <Title>Welcome</Title>
      <TextBox>Login to get started</TextBox>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values, { resetForm }) => {
          const user = userAccountsMock.find(u => {
            return u.email === values.email;
          });
          if (user) {
            login({ ...user });
            resetForm();
          }
        }}
      >
        {({ values, handleSubmit, handleChange }) => (
          <Form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <FormInput
                id="email"
                name="email"
                type="text"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <FormInput
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </FormControl>
            <LoginButton type="submit">Login</LoginButton>
          </Form>
        )}
      </Formik>
      <HelperText>
        First time here? <LinkText href="#">Create your account</LinkText>
      </HelperText>
    </Wrapper>
  );
};

export default component;
