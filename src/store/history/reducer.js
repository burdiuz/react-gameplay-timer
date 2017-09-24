import createReducer from '../createReducer';
import historySize from 'src/utils/historySize';

const initialState = () => ({
  list: [],
});

export const historyAddEntry = (state, action) => {
  const { text, style } = action;
  const maxSize = historySize();
  const list = [{ text, style }, ...state.list];
  return {
    ...state,
    list: list.slice(0, maxSize),
  };
};

export const historyClear = (state) => {
  return {
    ...state,
    list: [],
  };
};


export default createReducer(module.exports, initialState()); 
