import React from "react";
import { Formik } from "formik";
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";

import { GENDER } from "../../../constants/users.constants";
import { SubmitButton } from "../../../styles/controllers/buttons";
import { Form, FormControl, FormLabel, FormInput, FormSelect, FormSelectOption } from "./styles";

const component = ({ addUser }) => {
  const timezones = moment.tz.names();

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        gender: GENDER.FEMALE,
      }}
      onSubmit={(values, { resetForm }) => {
        addUser({
          user: {
            uid: uuidv4(),
            ...values,
          },
        });
        resetForm();
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel htmlFor="firstName">First Name</FormLabel>
            <FormInput
              id="firstName"
              type="text"
              value={values.firstName}
              name="firstName"
              placeholder="First name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="lastName">Last Name</FormLabel>
            <FormInput
              id="lastName"
              type="text"
              value={values.lastName}
              name="lastName"
              placeholder="Last name"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              id="email"
              type="text"
              value={values.email}
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <FormSelect
              id="gender"
              type="select"
              value={values.gender}
              name="gender"
              placeholder="Gender"
              onChange={handleChange}
            >
              {Object.values(GENDER).map(g => (
                <FormSelectOption key={g}>{g}</FormSelectOption>
              ))}
            </FormSelect>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="timezone">Timezone</FormLabel>
            <FormSelect
              id="timezone"
              type="select"
              value={values.timezone}
              name="timezone"
              placeholder="Timezone"
              onChange={handleChange}
            >
              {timezones.map(tz => (
                <FormSelectOption key={tz}>{tz}</FormSelectOption>
              ))}
            </FormSelect>
          </FormControl>
          <SubmitButton type="submit">Add User</SubmitButton>
        </Form>
      )}
    </Formik>
  );
};

export default component;
