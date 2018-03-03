import React from 'react';
import PropTypes from 'prop-types';
import { Text as NBText } from 'native-base';

import combineStyles from './helpers/combine-styles';

import globalStyles from '../../assets/styles';

const textStyles = {
  bold: {
    fontWeight: 'bold',
  },
};

const Text = (props) => {
  const { children, bold, ...restProps } = props;
  let textStyle = {};

  if (bold) textStyle = textStyles.bold;

  const styles = combineStyles(globalStyles.text, textStyle, props);

  return (
    <NBText style={styles.combined} {...restProps}>
      {children}
    </NBText>
  );
};

Text.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  bold: false,
};

export default Text;
