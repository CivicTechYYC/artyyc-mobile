import React from 'react';
import PropTypes from 'prop-types';
import { Label as NBLabel } from 'native-base';

import combineStyles from './helpers/combine-styles';

const labelStyles = {};

const Label = (props) => {
  const { children, ...restProps } = props;
  // let labelStyle = {};

  const styles = combineStyles({}, labelStyles, props.style);

  return (
    <NBLabel style={styles.combined} {...restProps}>
      {children}
    </NBLabel>
  );
};

Label.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

Label.defaultProps = {
  style: {},
};

export default Label;
