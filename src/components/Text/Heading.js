/*
 * @flow
 */
import React from 'react';
import Text from './Text';

import styles from './styles';

const Heading = (props) => {
  const { style, children, ...rest } = props;
  return (
    <Text style={[styles.heading, style]} {...rest}>{children}</Text>
  );
};

Heading.propTypes = {
  ...Text.propTypes,
};

Heading.defaultProps = {};

export default Heading;
