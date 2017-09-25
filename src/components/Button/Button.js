/*
 * @flow
 */
import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

const Button = ({
  style,
  disabled,
  color,
  disabledColor,
  children,
  ...touchable
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.touchable, style]}
    {...touchable}>
    <View style={[styles.container, {
      backgroundColor: disabled && disabledColor || color,
    }]}>
      {children}
    </View>
  </TouchableOpacity>
);

export default Button;
