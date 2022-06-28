import { createSlice } from "@reduxjs/toolkit";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { getUAHtoEUR } from "./currency-operations";
import { getUAHtoPLN } from "./currency-operations";
import { getUAHtoUSD } from "./currency-operations";

const initialState = {
  UAHtoEUR: "",
  UAHtoPLN: "",
  UAHtoUSD: "",
  error: null,
};

// const allCurrency = createSlice({
//   name: "currency",
//   initialState,

//   [getUAHtoEUR.fulfilled](state, action) {
//     state.UAHtoEUR = action.payload;
//   },

//   [getUAHtoEUR.rejected](state, action) {
//     state.error = {
//       status: action.payload.response.status,
//       message: action.payload.response.data.message,
//     };
//   },

//   [getUAHtoPLN.fulfilled](state, action) {
//     state.UAHtoPLN = action.payload;
//   },

//   [getUAHtoPLN.rejected](state, action) {
//     state.error = {
//       status: action.payload.response.status,
//       message: action.payload.response.data.message,
//     };
//   },

//   [getUAHtoUSD.fulfilled](state, action) {
//     state.UAHtoUSD = action.payload;
//   },

//   [getUAHtoUSD.rejected](state, action) {
//     state.error = {
//       status: action.payload.response.status,
//       message: action.payload.response.data.message,
//     };
//   },
// });

// export default allCurrency.reducer;

const reducerUAHtoUSD = createReducer(initialState.UAHtoUSD, {
  [getUAHtoUSD.fulfilled]: (_, action) => action.payload,
  [getUAHtoUSD.rejected]: (state, action) => {
    state.error = {
      status: action.payload.response.status,
      message: action.payload.response.data.message,
    };
  },
});

const reducerUAHtoEUR = createReducer(initialState.UAHtoEUR, {
  [getUAHtoEUR.fulfilled]: (_, action) => action.payload,
  [getUAHtoEUR.rejected]: (state, action) => {
    state.error = {
      status: action.payload.response.status,
      message: action.payload.response.data.message,
    };
  },
});

const reducerUAHtoPLN = createReducer(initialState.UAHtoPLN, {
  [getUAHtoPLN.fulfilled]: (_, action) => action.payload,
  [getUAHtoPLN.rejected]: (state, action) => {
    state.error = {
      status: action.payload.response.status,
      message: action.payload.response.data.message,
    };
  },
});

export default combineReducers({
  UAHtoUSD: reducerUAHtoUSD,
  UAHtoEUR: reducerUAHtoEUR,
  UAHtoPLN: reducerUAHtoPLN,
});
