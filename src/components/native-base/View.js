import React from 'react';
import PropTypes from 'prop-types';
import { View as NBView } from 'native-base';

import combineStyles from './helpers/combine-styles';

import globalStyles from '../../assets/styles';

const viewStyles = {
  bold: {
    fontWeight: 'bold',
  },
};

const View = (props) => {
  const { children, bold, ...restProps } = props;
  let viewStyle = {};

  if (bold) viewStyle = viewStyles.bold;

  const styles = combineStyles(globalStyles.View, viewStyle, props);

  return (
    <NBView style={styles.combined} {...restProps}>
      {children}
    </NBView>
  );
};

View.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

View.defaultProps = {
  bold: false,
};

export default View;
