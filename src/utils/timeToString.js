import { padStart } from 'lodash/string';

export const getHours = (time) => (time / 3600000 >> 0);

export const hoursToString = (time, pad = true) => {
  const value = String(getHours(time));
  if (!pad) return value;
  return padStart(value, 2, '0');
};

export const getMinutes = (time) => (time / 60000 % 60 >> 0);

export const minutesToString = (time, pad = true) => {
  const value = String(getMinutes(time));
  if (!pad) return value;
  return padStart(value, 2, '0');
};

export const getSeconds = (time) => (time / 1000 % 60 >> 0);

export const secondsToString = (time, pad = true) => {
  const value = String(getSeconds(time));
  if (!pad) return value;
  return padStart(value, 2, '0');
};

export const getTimestamp = (hours, minutes, seconds) => (hours * 3600000 + minutes * 60000 + seconds * 1000);

const timeToString = (time) => {
  return `${hoursToString(time)}:${minutesToString(time)}:${secondsToString(time)}`;
};

export default timeToString;
