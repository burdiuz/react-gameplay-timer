
const createReducer = (reducers, initialState) => (state, action) => {
  const reducer = reducers[action.type];
  let result = state || { ...initialState };
  if (action.type !== 'default' && reducer) {
    result = reducer(state, action);
  }
  return result;
};

export default createReducer;
