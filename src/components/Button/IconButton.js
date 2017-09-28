/*
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import { colorType } from 'src/utils/propTypes';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export const IconButton = ({
  disabled,
  color,
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
      borderColor: disabled ? disabledColor : color,
    }, style]}
    {...touchable}>
    {children}
  </TouchableOpacity>
);

IconButton.propTypes = {
  disabled: PropTypes.bool,
  color: colorType,
  disabledColor: colorType,
  style: PropTypes.any,
  children: PropTypes.node,
};

IconButton.defaultProps = {
  disabled: false,
  color: 0x4285F4ff,
  disabledColor: 0x999999ff,
  style: null,
  children: null,
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

FAIconButton.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  disabled: PropTypes.bool,
  color: colorType,
  disabledColor: colorType,
  style: PropTypes.any,
  children: PropTypes.node,
};

FAIconButton.defaultProps = {
  size: 30,
  disabled: false,
  color: '#4285F4',
  disabledColor: '#999',
  style: null,
  children: null,
};

export default IconButton;
