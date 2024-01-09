// import {combineReducers} from "redux";
// import {cartReducer} from "./reducers/cartReducer";

// // global depo
// export const rootReducer = combineReducers({
// 	cart: cartReducer, //  global depo altındaki "cart" isimli alt depo
// });

import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})