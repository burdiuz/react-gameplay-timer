import { HISTORY_MARGIN, HISTORY_FONT_SIZE } from 'src/screens/History/styles';
import { Dimensions } from 'react-native';

const historySize = () => {
  const size = Dimensions.get('screen');
  const height = Math.max(size.width, size.height);
  return (height - HISTORY_MARGIN * 2) / HISTORY_FONT_SIZE >> 0;
};

export default historySize;
