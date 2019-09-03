import React from 'react';
import { Formik, Field, Form } from 'formik';
import { TextField } from 'formik-material-ui';
import { Button } from '@material-ui/core';
import styled from 'styled-components';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string("Enter a username").required("Username is required"),
  email: Yup.string("Enter your email").email("Must be a valid email").required("Email is required"),
  password: Yup.string("Enter your password").min(6, "Password must be at least 6 characters long").required("Password field is required"),
  confirmPassword: Yup.string("Re-enter your password").required("Please confirm your password").oneOf([Yup.ref("password")], "Passwords must match"),
})

const Container = styled.div`
  width: 90%;
  max-width: 500px;
  padding: 2rem 4rem;
  background: #fff;
  border-radius: 12px;
  margin: 2rem auto;
`;

const FieldGroup = styled.div`
  padding: 0 0 2rem;
  div.MuiFormControl-root {
    margin: 0.5rem 0;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin-left: 1rem;
  }
`;

const UserForm = () => {
  return (
  <Container>
    <h1>User Form</h1>
    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      render={({submitForm, isSubmitting, values, setFieldValue}) => (
        <Form>
          <FieldGroup>
          <Field name="username" component={TextField} label="Username" variant="outlined" fullWidth />
          <Field name="email" component={TextField} label="Email" variant="outlined" fullWidth />
          <Field name="password" type="password" component={TextField} label="Password" variant="outlined" fullWidth />
          </FieldGroup>
          <ButtonGroup>
            <Button variant="outlined" color="secondary" type="button" size="large">Back</Button>
            <Button variant="outlined" color="primary" type="submit" size="large">Submit</Button>
          </ButtonGroup>
        </Form>
      )}
    />
  </Container>
  )
};

export default UserForm;
