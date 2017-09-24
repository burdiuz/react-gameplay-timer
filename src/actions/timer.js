export const TIMER_RESET = 'timerReset';
export const TIMER_TICK = 'timerTick';

let intervalId;

const tickHandler = (dispatch, getState) => {
  const { timer: { startTime, value } } = getState();
  const next = (Date.now() - startTime) >> 0;
  if (next >= ((value / 1000 >> 0) + 1) * 1000) {
    dispatch({
      type: TIMER_TICK,
      value: next,
    });
  }
};

export const start = (accuracy) => (dispatch, getState) => {
  const interval = 1000 / accuracy;
  if (intervalId) {
    stop();
  }
  intervalId = setInterval(tickHandler, interval, dispatch, getState);
};

export const stop = () => () => {
  clearInterval(intervalId);
  intervalId = 0;
};

export const timerReset = () => ({
  type: TIMER_RESET,
  startTime: Date.now(),
  value: 0,
});
