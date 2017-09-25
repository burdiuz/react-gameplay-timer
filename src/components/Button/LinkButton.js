/*
 * @flow
 */
import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Text from 'src/components/Text';

import styles from './styles';

const LinkButton = (props) => {
  const { label, icon, style, disabled, onPress, caps, underline, ...rest } = props;
  const wrapperStyle = underline || underline === undefined
    ? [styles.linkWrapper, styles.linkUnderline]
    : styles.linkWrapper;
  const buttonLabel = caps
    ? String(label).toUpperCase()
    : label;
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.touchable]}>
      <View style={wrapperStyle}>
        {icon || null}
        <Text style={[styles.text, styles.link, style]} {...rest}>
          {buttonLabel}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default LinkButton;
