import { StyleSheet }from 'react-native';

const HISTORY_MARGIN = 5;
const HISTORY_FONT_SIZE = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: HISTORY_MARGIN,
    left: HISTORY_MARGIN,
    right: HISTORY_MARGIN,
    bottom: HISTORY_MARGIN,
    opacity: 0.5,
  },
  text: {
    fontSize: HISTORY_FONT_SIZE,
  },
});
