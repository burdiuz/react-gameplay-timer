import createReducer from '../createReducer';

const initialState = () => ({
  startTime: Date.now(),
  value: 0,
});

export const timerReset = (state, action) => {
  const { startTime, value } = action;
  return {
    ...state,
    startTime,
    value,
  };
};
export const timerTick = (state, action) => {
  const { value } = action;
  console.log('timerTick', value);
  return {
    ...state,
    value,
  };
};

export default createReducer(module.exports, initialState());
