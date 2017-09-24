import createReducer from './createReducer';

const initialState = () => ({
  fontSize: 60,
  color: 0xFFFFFFFF,
});

export const updateFontSize = (state, { fontSize }) => {
  return {
    ...state,
    fontSize,
  };
};

export const updateFontColor = (state, { color }) => {
  return {
    ...state,
    color,
  };
};

export const updateStyle = (state, { style }) => {
  return {
    ...state,
    ...style,
  };
};

export default createReducer(module.exports, initialState());
