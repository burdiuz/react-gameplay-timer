/*
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Text from 'src/components/Text';

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
                item.style,
              ]}>
          {item.text}
        </Text>
      ))
    }
  </View>
);

History.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      style: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  style: PropTypes.any,
};

History.defaultProps = {
  style: null,
};

export default History;
