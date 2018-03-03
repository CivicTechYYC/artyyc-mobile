import React from 'react';
import PropTypes from 'prop-types';

import { Input, Item, Label, Text } from '../';

const FloatingLabelInput = (props) => {
  const {
    label,
    meta,
    ...restProps
  } = props;

  return (
    <Item>
      <Label>{label}</Label>
      <Input {...restProps} />
      { meta.touched && meta.error && <Text >{meta.error}</Text>}
    </Item>
  );
};

FloatingLabelInput.propTypes = {
  label: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
  }).isRequired,
};

export default FloatingLabelInput;

