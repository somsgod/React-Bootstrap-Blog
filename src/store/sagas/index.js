import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import * as blog from "./../reducers/blog";

export const rootReducer = combineReducers({
  blog: blog.reducer,
});

export function* rootSaga() {
  yield all([blog.saga()]);
}
