import { find, filter, sortBy } from 'lodash';
import createReducer from '../createReducer';

const createThreshold = (startTime = 0, color = 0xff0000) => ({
  startTime,
  style: {
    color,
  }
});

const initialState = () => ({
  vibrate: true,
  thresholds: [
    createThreshold(0, 0xFF6600FF),
    createThreshold(900000, 0xFFCC00FF),
    createThreshold(3600000, 0x66CC00FF),
  ],
});

export const settingsAddThreshold = (state, action) => {
  const { startTime, color } = action;
  const { thresholds } = state;
  const item = find(thresholds, { startTime });
  if (item) {
    return settingsUpdateThreshold(state, action, item);
  } else {
    const list = sortBy(
      [...thresholds, createThreshold(startTime, color)],
      (item) => item.startTime,
    );
    return {
      ...state,
      thresholds: list,
    };
  }

  return state;
};

export const settingsUpdateThreshold = (state, action, item = null) => {
  const { startTime } = action;
  if (!item) {
    item = find(state.thresholds, { startTime });
  }
  if (item) {
    state = settingsRemoveThreshold(state, action);
    return settingsAddThreshold(state, action);
  }
  return state;
};

export const settingsRemoveThreshold = (state, { startTime }) => ({
  ...state,
  thresholds: filter(state.thresholds, (item) => {
    return item.startTime !== startTime;
  }),
});

export const settingsResetThresholds = (state) => ({
  ...state,
  thresholds: [
    createThreshold(0, 0xFF6600FF),
  ],
});

export const settingsChange = (state, { vibrate }) => ({
  ...state,
  vibrate,
});


export default createReducer(module.exports, initialState());
