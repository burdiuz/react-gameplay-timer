import { combineReducers } from 'redux';
import history from './history';
import timer from './timer';
import settings from './settings';
import style from './style';

export default combineReducers({
  history,
  timer,
  settings,
  style,
});
