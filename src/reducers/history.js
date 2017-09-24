import createReducer from './createReducer';

const initialState = () => ({
  list: [],
});

export const historyAddEntry = (state, action) => {
  const { value, style } = action;
  return {
    ...state,
    list: [
      ...state.list,
      { value, style }
    ],
  };
};

export const historyClear = (state) => {
  return {
    ...state,
    list: [],
  };
};


export default createReducer(module.exports, initialState()); 
