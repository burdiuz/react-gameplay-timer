/*
 * @flow
 */
import React from 'react';
import { TextInput } from 'react-native';

import styles from './styles';

const Input = ({
  style,
  ...rest
}) => (
  <TextInput
    style={[styles.font, styles.container, styles.input, style]}
    underlineColorAndroid='transparent'
    {...rest} />
)

Input.propTypes = {
  ...TextInput.propTypes,
};

Input.defaultProps = {};

export default Input;
