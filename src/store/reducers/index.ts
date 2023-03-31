import { combineReducers } from "redux";
import productReducer from "./productSlice";

export const rootReducer = combineReducers({ productReducer });

export type RootState = ReturnType<typeof rootReducer>;
