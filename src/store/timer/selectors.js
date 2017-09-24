import timeToString from 'src/utils/timeToString';

export const getValue = (state) => state.timer.value;

export const getFormattedValue = (state) => timeToString(getValue(state));
