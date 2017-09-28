/*
 * @flow
 */

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  touchable: {},
  container: {
    flexDirection: 'row',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100,
  },
  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
  text: {
    marginLeft: 10,
    color: '#fff',
    textAlignVertical: 'center',
  },
  checkboxView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    paddingLeft: 5,
  },
});

export default styles;
