import React from 'react';
import PropTypes from 'prop-types';
import { Button as NBButton } from 'native-base';

import combineStyles from './helpers/combine-styles';

import globalStyles from '../../assets/styles';

const buttonStyles = {
  default: {
    backgroundColor: globalStyles.colors.default,
  },
  primary: {
    backgroundColor: globalStyles.colors.primary,
  },
  secondary: {
    backgroundColor: globalStyles.colors.secondary,
  },
  light: {
    backgroundColor: globalStyles.colors.light,
  },
  dark: {
    backgroundColor: globalStyles.colors.dark,
  },
  transparent: {
    backgroundColor: 'transparent',
  },
};

const Button = (props) => {
  const {
    primary,
    secondary,
    light,
    dark,
    children,
    transparent,
    ...restProps
  } = props;

  let buttonStyle = {
    ...buttonStyles.default,
  };

  if (primary) buttonStyle = buttonStyles.primary;
  if (secondary) buttonStyle = buttonStyles.secondary;
  if (light) buttonStyle = buttonStyles.light;
  if (dark) buttonStyle = buttonStyles.dark;
  if (transparent) buttonStyle = buttonStyles.transparent;

  const styles = combineStyles({}, buttonStyle, props);

  return (
    <NBButton style={styles.combined} {...restProps}>
      {children}
    </NBButton>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  light: PropTypes.bool,
  dark: PropTypes.bool,
  default: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  primary: false,
  secondary: false,
  light: false,
  dark: false,
  default: false,
  transparent: false,
};

export default Button;
