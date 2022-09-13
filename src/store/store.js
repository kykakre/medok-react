import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import serviceReducer from "./slice/serviceSlice";
import doctorReducer from "./slice/doctorSlice";
import typeReducer from "./slice/typeSlice";
import contentReducer from "./slice/contentSlice";
import commentsReducer from "./slice/commentsSlice";
const rootReducer = combineReducers({
  serviceReducer,
  doctorReducer,
  typeReducer,
  contentReducer,
  commentsReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  });
};
