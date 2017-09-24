import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import styles from './styles';

const History = ({
  list,
  style,
}) => (
  <View
    style={[styles.container, style]}>
    {
      list && list.map((item, index) => (
        <Text key={index}
              style={[
                styles.text,
                {
                  color: item.color
                }
              ]}>
          {item.value}
        </Text>
      ))
    }
  </View>
);

History.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      color: PropTypes.number.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default History;
