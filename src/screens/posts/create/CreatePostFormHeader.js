import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { submit } from 'redux-form';

import { Text, Button } from '../../../components';

const HeaderEl = ({ navigation }) => {
  const { params = {} } = navigation.state;
  const headerRight = (
    <ConnectedButton />
  );

  return {
    headerRight,
    title: `${params && params.id ? 'Edit' : 'Create'} Post`,
  };
};

export default HeaderEl;

let ConnectedButton = ({ dispatch }) => (
  <Button
    transparent
    onPress={() => dispatch(submit('createEditPost'))}
  >
    <Text style={{ color: 'red' }}>Save</Text>
  </Button>
);

ConnectedButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

ConnectedButton = connect()(ConnectedButton);
