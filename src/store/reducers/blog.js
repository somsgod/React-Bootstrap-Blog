import { put, takeLatest,call } from "redux-saga/effects";
import request from './../../__mocks__/request';
import regeneratorRuntime from "regenerator-runtime";

const actionTypes = {
  FetchDescription: 'FETCH_DESCRIPTION',
  FetchHomeDescription: 'FETCH_HOME_DESCRIPTION',
  SetDescription: 'SET_DESCRIPTION',
  SetHomeDescription: 'SET_HOME_DESCRIPTION',
};

const initialState = {
  blogDescription: null,
  homePageBlog: null
};

export function reducer (state = initialState, action) {
	console.log(action);
	switch(action.type) {
		case actionTypes.FetchDescription:
			return {blogDescription:null};
		case actionTypes.FetchHomeDescription:
			return {homePageBlog:null};
	    case actionTypes.SetDescription:
			return action.payload;
		case actionTypes.SetHomeDescription:
			return action.payload;
	    default:
	      return state;
  	}
}

export const actions = {
  fetchDescription: blogDescription => ({ type: actionTypes.FetchDescription, payload:{blogDescription}}),
  fetchHomeDescription: homePageBlog => ({ type: actionTypes.FetchHomeDescription, payload:{homePageBlog}}),
  setDescription: blogDescription => ({ type: actionTypes.SetDescription, payload:{blogDescription}}),
  setHomeDescription: homePageBlog => ({ type: actionTypes.SetHomeDescription, payload:{homePageBlog}}),
};

export function* saga() {
  yield takeLatest(actionTypes.FetchDescription, function* fetchDescription(action) {
	try {
		const result = yield call(request,action.payload.blogDescription);
		yield put(actions.setDescription(result.data.data[0].description));
	} catch (e) {
		yield put(actions.setDescription(""));
	}
  });
  yield takeLatest(actionTypes.FetchHomeDescription, function* fetchHomeDescription(action) {
	try {
		const result = yield call(request,action.payload.homePageBlog);
			yield put(actions.setHomeDescription(result.data.data[0].description));
	} catch (e) {
		yield put(actions.setHomeDescription(""));
	}
  });
}