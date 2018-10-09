import { createStore, combineReducers, applyMiddleware, } from 'redux';
import { AsyncStorage } from 'react-native';
import thunk from 'redux-thunk';
import { persistStore, utoRehydrate } from 'redux-persist';
import history from './history/reducer';
import timer from './timer/reducer';
import settings from './settings/reducer';

const reducers = combineReducers({
  history,
  timer,
  settings,
});

const store = createStore(
  reducers,
  {},
  applyMiddleware(thunk),
);

persistStore(store, {
  whitelist: ['history', 'timer', 'settings'],
  storage: AsyncStorage,
});//.purge();

export default store;
