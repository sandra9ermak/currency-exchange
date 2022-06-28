import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

// import allCurrency from "./currency/currency-slice/allCurrency";
import currency from "./currency/currency-slice";

const rootReducer = combineReducers({
  currency: currency,
});

export const store = configureStore({
  reducer: rootReducer,
});
