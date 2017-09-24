import { StyleSheet }from 'react-native';

export default StyleSheet.create({
  colorsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  colorsListItem: {
    width: 75,
    height: 75,
    borderWidth: 5,
    borderColor: 0xffffffff,
  },
  colorsListItemSelected: {
    borderColor: 0xaaaaaaff,
  },
});
