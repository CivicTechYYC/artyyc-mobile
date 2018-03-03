import React from 'react';
import PropTypes from 'prop-types';
import { Item as NBItem } from 'native-base';

import combineStyles from './helpers/combine-styles';

const itemStyles = {};

const Item = (props) => {
  const { children, style, ...restProps } = props;

  // let itemStyle = {};
  // if (props.bold) textStyle = textStyles.bold;

  const styles = combineStyles({}, itemStyles, style);
  return (
    <NBItem style={styles.combined} {...restProps}>
      {children}
    </NBItem>
  );
};

Item.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};

Item.defaultProps = {
  style: {},
};

export default Item;
