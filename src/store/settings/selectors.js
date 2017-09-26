import { getValue } from 'src/store/timer/selectors';

export const getThresholds = (state) => state.settings.thresholds;

export const getCurrentThreshold = (state) => {
  const time = getValue(state);
  const thresholds = getThresholds(state);
  const lastIndex = thresholds.length - 1;
  for (let index = lastIndex; index >= 0; index--) {
    const item = thresholds[index];
    if (time >= item.startTime) {
      return item;
    }
  }
  return thresholds[lastIndex];
};

export const getVibrate = (state) => state.settings.vibrate;

export const getCurrentStartTime = (state) => getCurrentThreshold(state).startTime;

export const getCurrentStyle = (state) => getCurrentThreshold(state).style;
