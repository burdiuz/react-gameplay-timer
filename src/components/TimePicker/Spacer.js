/*
 * @flow
 */
import React from 'react';
import Text from 'src/components/Text';

import styles from './styles';

const Spacer = () => (
  <Text
    style={styles.spacer}
  >:</Text>
);

Spacer.propTypes = {};

Spacer.defaultProps = {};

export default Spacer;
