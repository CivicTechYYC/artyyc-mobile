import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, H1 } from 'native-base';
import { Button } from '../../components';

import Wrapper from '../components/UnAuthedWrapper';
// import SignInHeader from './components/SignInHeader';

import styles from './styles';

const SignInScreen = props => (
  <Wrapper style={styles.wrapper}>
    {!props.isLoggedIn ? (
      <View style={styles.signIn}>
        <H1 style={styles.heading}>Sign In!</H1>
        <Button
          full
          onPress={props.actions.signInWithFacebook}
          style={styles.facebookButton}
        >
          <Text>Facebook</Text>
        </Button>
        <Button full onPress={() => props.navigation.navigate('SignInWithEmail')}>
          <Text>Email and Password</Text>
        </Button>
        <H1 style={styles.heading}>Sign Up!</H1>
        <Button
          full
          primary
          onPress={() => props.navigation.navigate('SignUp')}
        >
          <Text>Email and Password</Text>
        </Button>
      </View>
    ) : (
      <View>
        <Text>Hi!</Text>
        <Button onPress={() => props.actions.logoutUser()}>
          <Text>Logout</Text>
        </Button>
        <Button onPress={() => props.navigation.navigate('ListPosts')}>
          <Text>Overview</Text>
        </Button>
      </View>
    )}
  </Wrapper>
);

SignInScreen.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  actions: PropTypes.shape({
    signInWithFacebook: PropTypes.func.isRequired,
    logoutUser: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignInScreen;
