/*
 * @flow
 */

import React from 'react';
import {
  TextInput,
} from 'react-native';

import styles from './styles';

const MultilineInput = (props) => {
  const {
    style,
    ...rest
  } = props;
  return (
    <TextInput
      style={[styles.font, styles.container, styles.multiline, style]}
      underlineColorAndroid='transparent'
      multiline={true}
      {...rest} />
  );
};

MultilineInput.propTypes = TextInput.propTypes;

export default MultilineInput;
