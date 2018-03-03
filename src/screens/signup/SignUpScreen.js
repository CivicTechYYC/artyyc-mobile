import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { Form, Button, Text } from '../../components';
import { FloatingLabelInput } from '../../components/inputs';
import Wrapper from '../components/UnAuthedWrapper';

import validateSignup from './validate';

const SignUpScreen = props => (
  <Wrapper>
    <Text bold>Sign Up with your Email!</Text>
    <Form>
      <Field
        component={FloatingLabelInput}
        autoCapitalize="none"
        name="displayName"
        label="Your Name"
      />
      <Field
        component={FloatingLabelInput}
        autoCapitalize="none"
        name="email"
        label="Email"
      />
      <Field
        component={FloatingLabelInput}
        autoCapitalize="none"
        name="password"
        label="password"
        last
      />
      <Button
        block
        full
        onPress={props.handleSubmit(props.actions.createUserWithEmailAndPassword)}
      >
        <Text>Register</Text>
      </Button>
    </Form>
  </Wrapper>
);

SignUpScreen.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    createUserWithEmailAndPassword: PropTypes.func.isRequired,
  }).isRequired,
};

export default reduxForm({
  form: 'signUp',
  validate: validateSignup,
})(SignUpScreen);

