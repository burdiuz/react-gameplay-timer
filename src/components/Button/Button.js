/*
 * @flow
 */

import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import color from 'color';

import styles from './styles';

const gradientColors = (baseColor) => {
  const darken = color(baseColor).darken(0.1).toString();
  return [darken, baseColor, darken];
};

const Button = (props) => {
  const {
    style,
    disabled,
    color,
    disabledColor,
    children,
    ...touchable
  } = props;
  return (
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
};

export default Button;
