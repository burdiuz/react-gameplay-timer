/*
 * @flow
 */

import React from 'react';
import {
  TextInput,
} from 'react-native';

import styles from './styles';

const Input = (props) => {
  const {
    style,
    ...rest
  } = props;
  return (
    <TextInput
      style={[styles.font, styles.container, styles.input, style]}
      underlineColorAndroid='transparent'
      {...rest} />
  );
};

Input.propTypes = TextInput.propTypes;

export default Input;
