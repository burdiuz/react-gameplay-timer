/*
 * @flow
 */
import React from 'react';
import { TouchableOpacity, } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export const IconButton = ({
  disabled,
  disabledColor,
  style,
  children,
  ...touchable,
}) => (
  <TouchableOpacity
    disabled={disabled}
    style={[styles.touchable, {
      minWidth: 36,
      minHeight: 36,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4,
      borderWidth: 3,
      borderColor: disabled ? 0x999999ff : 0x4285F4ff,
    }, style]}
    {...touchable}>
    {children}
  </TouchableOpacity>
);

IconButton.defaultProps = {
  disabled: false,
};

export const FAIconButton = ({
  name,
  size,
  disabled,
  color,
  disabledColor,
  style,
  iconStyle,
  ...touchable
}) => (
  <IconButton
    disabled={disabled}
    disabledColor={disabledColor}
    style={style}
    {...touchable}
  >
    <Icon
      name={name}
      size={size}
      color={disabled && disabledColor || color}
      style={iconStyle}
    />
  </IconButton>
);

FAIconButton.defaultProps = {
  size: 30,
  disabled: false,
  color: '#4285F4',
  disabledColor: '#999',
};

export default IconButton;
