/*
 * @flow
 */

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 2,
    margin: 0,
  },
  font: {
    fontSize: 18,
  },
  input: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#4285F4',
    paddingHorizontal: 10,
    minHeight: 20, // for ios, sometimes when flex it might have 0 height and render weird
  },
  multiline: {
    borderWidth: 1,
    borderColor: '#4285F4',
    alignSelf: 'stretch',
    padding: 10,
    minHeight: 20,
  },
});

export default styles;
