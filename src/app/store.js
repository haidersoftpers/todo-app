import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import counterReducer from "../features/counter/counterSlice";
import todoReducer from "../features/todo/todoSlice";
import rootSaga from "../sagas";
import authSlice from "../features/auth/authSlice";
const persistConfig = {
  key: "root",
  storage,
};
let sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);
export { store, persistor };
