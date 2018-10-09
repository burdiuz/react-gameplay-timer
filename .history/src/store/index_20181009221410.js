import { createStore, combineReducers, applyMiddleware } from "redux";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import history from "./history/reducer";
import timer from "./timer/reducer";
import settings from "./settings/reducer";

const reducers = combineReducers({
  history,
  timer,
  settings
});

const store = createStore(
  persistReducer(
    {
      key: "root",
      storage: AsyncStorage,
      whitelist: ["history", "timer", "settings"]
    },
    reducers
  ),
  {},
  applyMiddleware(thunk)
);

persistStore(store);

export default store;
