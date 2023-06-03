import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import mealSlice from "./slice/mealSlice";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REGISTER,
  persistReducer,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  persistStore,
} from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
const reducer = combineReducers({
  mealdetails: mealSlice,
});
const persistedReducer = persistReducer(persistConfig, reducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
export default store;
