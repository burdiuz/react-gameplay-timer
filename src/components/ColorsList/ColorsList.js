/*
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View } from 'react-native';
import ColorsListItem from './ColorsListItem';
import COLORS from './COLORS';

import styles from './styles';

const ColorsList = ({
  selectedValue,
  onSelect,
  style,
  ...props
}) => {
  return (
    <ScrollView
      contentContainerStyle={{
        alignSelf: 'stretch',
        alignItems: 'stretch',
      }}
      {...props}
    >
      <View style={[
        styles.colorsList,
        style,
      ]}>
        {
          COLORS.map(({ name, code }) => (
            <ColorsListItem
              key={name}
              value={code}
              selected={selectedValue === code}
              onPress={onSelect}
            />
          ))
        }
      </View>
    </ScrollView>
  );
};

ColorsList.propTypes = {
  selectedValue: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  style: PropTypes.any,
};

ColorsList.defaultProps = {
  selectedValue: -1,
  style: null,
};

export default ColorsList;
