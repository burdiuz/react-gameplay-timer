import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, } from 'react-native';
import TimeText from 'src/components/TimeText';
import styles from './styles';

const TimeButton = (props) => {
  const { textStyle, time, ...buttonProps } = props;
  return (
    <TouchableOpacity
      {...buttonProps}>
      <TimeText
        style={[styles.text, textStyle]}
        time={time}
      />
    </TouchableOpacity>
  );
};

export default TimeButton;
