export const HISTORY_ADD_ENTRY = 'historyAddEntry';
export const HISTORY_CLEAR = 'historyClear';

export const historyAddEntry = (text, style) => ({
  text,
  style,
  type: HISTORY_ADD_ENTRY,
});

export const historyClear = () => ({
  type: HISTORY_CLEAR,
});
