/*
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import Text from 'src/components/Text';

import styles from './styles';

const LinkButton = ({
  label,
  icon,
  style,
  disabled,
  onPress,
  caps,
  underline,
  ...rest
}) => {
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

LinkButton.propTypes = {
  label: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.node,
  style: PropTypes.any,
  disabled: PropTypes.bool,
  caps: PropTypes.bool,
  underline: PropTypes.bool,
};

LinkButton.defaultProps = {
  icon: null,
  style: null,
  disabled: false,
  caps: false,
  underline: false,
};

export default LinkButton;
