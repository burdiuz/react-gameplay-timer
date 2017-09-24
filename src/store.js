import { AsyncStorage } from 'react-native';
import { createStore, compose, applyMiddleware, } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
//import { propagateSettings, } from 'src/actions/settings';
import reducers from 'src/reducers/index';

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    autoRehydrate(),
  ),
);

persistStore(store, {
  whitelist: ['history', 'timer', 'settings'],
  storage: AsyncStorage,
  callback: (...args) => {
    //store.dispatch(propagateSettings());
  },
}).purge();

export default store;
