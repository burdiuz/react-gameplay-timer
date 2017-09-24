import { timerReset } from 'src/store/timer/actions';
import { historyAddEntry } from 'src/store/history/actions';
import { getCurrentStyle } from 'src/store/settings/selectors';
import { getFormattedValue } from 'src/store/timer/selectors';

export const reset = () => (dispatch, getState) => {
  const state = getState();
  dispatch(historyAddEntry(getFormattedValue(state), getCurrentStyle(state)));
  dispatch(timerReset());
};
