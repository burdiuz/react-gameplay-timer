/*
 * @flow
 */
import React from 'react';
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
  return value || color;
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
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
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
        style={{
          paddingLeft: 5,
          color: getColor(disabled, selected, undefined, disabledColor, undefined),
        }}
      >
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

export default CheckBox;
