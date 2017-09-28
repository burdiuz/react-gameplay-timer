/*
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import { colorType } from 'src/utils/propTypes';
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
      backgroundColor: disabled && typeof(disabledColor) === 'number' ? disabledColor : color,
    }]}>
      {children}
    </View>
  </TouchableOpacity>
);

Button.propTypes = {
  style: PropTypes.any,
  disabled: PropTypes.bool,
  color: colorType,
  disabledColor: colorType,
  children: PropTypes.node,
};

Button.defaultProps = {
  style: null,
  disabled: false,
  children: null,
};

export default Button;
