import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, } from 'react-native';
import TimeText from 'src/components/TimeText';
import styles from './styles';

const TimeButton = ({ textStyle, time, ...buttonProps }) => (
  <TouchableOpacity
    {...buttonProps}>
    <TimeText
      style={[styles.text, textStyle]}
      time={time}
    />
  </TouchableOpacity>
);

TimeButton.propTypes = {
  ...TouchableOpacity.propTypes,
  time: PropTypes.number.isRequired,
  textStyle: PropTypes.any,
};

TimeButton.defaultProps = {
  textStyle: null,
};

export default TimeButton;
