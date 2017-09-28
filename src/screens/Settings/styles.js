import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 30,
    flex: 1,
  },
  thresholds: {
    flex: 1,
    justifyContent: 'space-between',
  },
  addThreshold: {
    marginTop: 15,
    marginBottom: 30,
  },
  thresholdView: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 0x999999ff,
  },
  thresholdTextView: {
    flexGrow: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  thresholdRemove: {
    marginRight: 10,
  },
  thresholdRemoveIcon: {
    marginBottom: 2,
  },
  thresholdText: {
    fontSize: 26,
  },
  thresholdColor: {
    width: 48,
    height: 48,
  },
});
