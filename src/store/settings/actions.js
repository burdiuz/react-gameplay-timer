export const SETTINGS_ADD_THRESHOLD = 'settingsAddThreshold';
export const SETTINGS_UPDATE_THRESHOLD = 'settingsUpdateThreshold';
export const SETTINGS_REMOVE_THRESHOLD = 'settingsRemoveThreshold';
export const SETTINGS_RESET_THRESHOLDS = 'settingsResetThresholds';
export const SETTINGS_CHANGE = 'settingsChange';

export const addThreshold = (startTime, color) => ({
  type: SETTINGS_ADD_THRESHOLD,
  startTime,
  color,
});

export const updateThreshold = (startTime, color) => ({
  type: SETTINGS_UPDATE_THRESHOLD,
  startTime,
  color,
});

export const removeThreshold = (startTime) => ({
  type: SETTINGS_REMOVE_THRESHOLD,
  startTime,
});

export const resetThresholds = () => ({
  type: SETTINGS_RESET_THRESHOLDS,
});

export const changeSettings = (vibrate) => ({
  type: SETTINGS_CHANGE,
  vibrate,
});
