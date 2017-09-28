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
import Icon from 'react-native-vector-icons/FontAwesome';
import Text from 'src/components/Text'

import styles from './styles';

const getColor = (disabled, selected, color, disabledColor, selectedColor) => {
  let value;
  if (disabled) {
    value = disabledColor;
  } else if (selected) {
    value = selectedColor;
  }
  return value || typeof(value) === 'number' ? value : color;
};

export const CheckBoxView = ({
  disabled,
  selected,
  color,
  disabledColor,
  selectedColor,
  style,
}) => (
  <Icon
    name={selected ? 'check-square-o' : 'square-o'}
    size={30}
    color={getColor(
      disabled,
      selected,
      color,
      disabledColor,
      selectedColor,
    )}
    style={[{
      paddingRight: selected ? 0 : 4,
    }, style]}
  />
);

CheckBoxView.propTypes = {
  selected: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  color: colorType,
  disabledColor: colorType,
  selectedColor: colorType,
  style: PropTypes.any,
};

CheckBoxView.defaultProps = {
  disabled: false,
  color: '#4285F4',
  disabledColor: '#999999',
  selectedColor: '#4285F4',
  style: null,
};

export const CheckBoxButton = ({
  onPress,
  disabled,
  selected,
  color,
  disabledColor,
  selectedColor,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
    style={styles.touchable}
  >
    <CheckBoxView
      disabled={disabled}
      selected={selected}
      color={color}
      disabledColor={disabledColor}
      selectedColor={selectedColor}
      style={style}
    />
  </TouchableOpacity>
);

CheckBoxButton.propTypes = {
  ...CheckBoxView.propTypes,
  onPress: PropTypes.func.isRequired,
};

CheckBoxButton.defaultProps = {};

const CheckBox = ({
  label,
  onPress,
  disabled,
  selected,
  color,
  disabledColor,
  selectedColor,
  style,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled}
  >
    <View
      style={styles.checkboxView}
    >
      <CheckBoxView
        disabled={disabled}
        selected={selected}
        color={color}
        disabledColor={disabledColor}
        selectedColor={selectedColor}
        style={style}
      />
      <Text
        style={[
          styles.checkboxText,
          { color: getColor(disabled, selected, undefined, disabledColor, undefined) }
        ]}
      >
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

CheckBox.propTypes = {
  ...CheckBoxButton.propTypes,
  label: PropTypes.string.isRequired,
};

CheckBox.defaultProps = {};

export default CheckBox;
