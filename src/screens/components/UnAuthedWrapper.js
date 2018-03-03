import React from 'react';
import PropTypes from 'prop-types';

import { Container, Content } from 'native-base';

const UnAuthedWrapper = (props) => {
  const {
    style,
    header,
    footer,
    children,
  } = props;

  const Header = header;
  const Footer = footer;

  return (
    <Container >
      {header && (<Header />)}
      <Content contentContainerStyle={style}>
        { children }
      </Content>
      {Footer && (<Footer />)}
    </Container>
  );
};


UnAuthedWrapper.propTypes = {
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  header: PropTypes.func,
  footer: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

UnAuthedWrapper.defaultProps = {
  style: {},
  header: null,
  footer: null,
};

export default UnAuthedWrapper;
