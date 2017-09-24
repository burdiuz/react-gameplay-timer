import { padStart } from 'lodash/string';

export const hoursToString = (time, pad = true) => {
  const value = String(time / 3600000 >> 0);
  if (!pad) return value;
  return padStart(value, 2, '0');
};

export const minutesToString = (time, pad = true) => {
  const value = String(time / 60000 % 60 >> 0);
  if (!pad) return value;
  return padStart(value, 2, '0');
};

export const secondsToString = (time, pad = true) => {
  const value = String(time / 1000 % 60 >> 0);
  if (!pad) return value;
  return padStart(value, 2, '0');
};

const timeToString = (time) => {
  return `${hoursToString(time)}:${minutesToString(time)}:${secondsToString(time)}`;
};

export default timeToString;
