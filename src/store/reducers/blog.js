import { put, takeLatest,call } from "redux-saga/effects";
import request from './../../__mocks__/request';
import regeneratorRuntime from "regenerator-runtime";

const actionTypes = {
  FetchDescription: 'FETCH_DESCRIPTION',
  SetDescription: 'SET_DESCRIPTION',
};

const initialState = {
  blogDescription: null
};

export function reducer (state = initialState, action) {
	console.log(action);
	switch(action.type) {
		case actionTypes.FetchDescription:
			return initialState;
	    case actionTypes.SetDescription:
			return action.payload;
	    default:
	      return state;
  	}
}

export const actions = {
  fetchDescription: blogDescription => ({ type: actionTypes.FetchDescription, payload:{blogDescription}}),
  setDescription: blogDescription => ({ type: actionTypes.SetDescription, payload:{blogDescription}}),
};

export function* saga() {
  yield takeLatest(actionTypes.FetchDescription, function* fetchDescription(action) {
	try {
      const result = yield call(request,action.payload.blogDescription);
	  yield put(actions.setDescription(result.data.data[0].description));
	} catch (e) {
		console.log(e);
	}
  });
}