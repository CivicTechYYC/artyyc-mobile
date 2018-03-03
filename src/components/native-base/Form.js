import React from 'react';
import PropTypes from 'prop-types';
import { Form as NBForm } from 'native-base';

import combineStyles from './helpers/combine-styles';

const formStyles = {};

const Form = (props) => {
  const { children, ...restProps } = props;
  // let formStyle = {};
  // if (props.bold) textStyle = textStyles.bold;

  const styles = combineStyles({}, formStyles, props);

  return (
    <NBForm style={styles.combined} {...restProps}>
      {children}
    </NBForm>
  );
};

Form.propTypes = {
  // bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Form.defaultProps = {
  // bold: false,
};

export default Form;

