import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import timeToString from 'src/utils/timeToString';

const TimeText = ({
  time,
  ...props,
}) => (
  <Text {...props}>
    {timeToString(time)}
  </Text>
);

TimeText.propTypes = {
  time: PropTypes.number.isRequired,
  style: PropTypes.any,
};

export default TimeText;
