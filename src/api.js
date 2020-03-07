import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios'
export function* fetchWhether(action) {
    try {
       const user = yield call(fetch(), action.payload.userId);
       yield put({type: "USER_FETCH_SUCCEEDED", user: user});
    } catch (e) {
       yield put({type: "USER_FETCH_FAILED", message: e.message});
    }
 }

 export const fetchData = (city, options = {}) => {
    return new Promise((resolve, reject) => {
      return axios(`/getCities?city=${city}`, options)
        .then((response) => {
            return response.status !== 200 ? reject(response) : response})
        .then((response) => response.data)
        .then((response) => resolve(response))
        .catch((error) => {
          return reject(error);
        });
    });
  };
  