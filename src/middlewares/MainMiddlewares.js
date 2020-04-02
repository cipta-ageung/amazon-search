import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";

import { reducer } from "./reducers/MovieReducer";

export const rootReducers = combineReducers({
});

export const setupEpicCombines = combineEpics(
);
