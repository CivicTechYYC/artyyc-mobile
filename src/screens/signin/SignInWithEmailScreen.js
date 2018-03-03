import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';

import { Form, Button, Text } from '../../components';
import { FloatingLabelInput } from '../../components/inputs';

import Wrapper from '../components/UnAuthedWrapper';

import validateSignIn from './validate';

const SignInWithEmailScreen = (props) => {
  return (
    <Wrapper>
      <Text bold>Sign In with your Emailz!</Text>
      {props.errors && (<Text danger>Invalid username or password</Text>)}
      <Form>
        <Field
          component={FloatingLabelInput}
          autoCapitalize="none"
          name="email"
          label="Email"
          keyboardType="email-address"
        />
        <Field
          component={FloatingLabelInput}
          autoCapitalize="none"
          name="password"
          label="Password"
          secureTextEntry
          last
        />
        <Button
          block
          full
          primary
          onPress={props.handleSubmit(props.actions.signInWithEmailAndPassword)}
        >
          <Text>Sign In</Text>
        </Button>
      </Form>
    </Wrapper>
  );
};

SignInWithEmailScreen.propTypes = {
  errors: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    signInWithEmailAndPassword: PropTypes.func.isRequired,
  }).isRequired,
};

SignInWithEmailScreen.defaultProps = {
  errors: [],
};


export default reduxForm({
  form: 'signInWithEmailAndPassword',
  validate: validateSignIn,
})(SignInWithEmailScreen);
