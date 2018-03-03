import React from 'react';
import PropTypes from 'prop-types';
import { Input as NBInput } from 'native-base';

import combineStyles from './helpers/combine-styles';

const inputStyles = {};

const Input = (props) => {
  const {
    input,
    style,
    ...restProps
  } = props;

  const styles = combineStyles({}, inputStyles, props);

  return (
    <NBInput {...input} {...restProps} style={styles.combined} />
  );
};

Input.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Input.defaultProps = {
  style: {},
};

export default Input;
