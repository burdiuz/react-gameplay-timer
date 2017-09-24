import { timerReset } from 'src/actions/timer';

export const reset = () => (dispatch) => {
  timerReset
  dispatch();
};
