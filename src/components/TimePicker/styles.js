/*
 * @flow
 */

import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  heading: {
    marginBottom: 15,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  cancelButton: {
    marginRight: 20,
  },
  input: {
    fontSize: 60,
    paddingHorizontal: 4,
    textAlign: 'center',
    width: 80,
  },
  spacer: {
    fontSize: 60,
    width: 18,
  },
});

export default styles;
