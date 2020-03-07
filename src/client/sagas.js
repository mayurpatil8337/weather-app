import { call, put, takeEvery } from 'redux-saga/effects';
import {fetchData} from './api'
function* fetchWhetherByCountry(action) {
  
  const {city } = action
    try {
      yield put({type: "WHETHER_FETCH_INIT"})
      const response = yield call(fetchData,city);
      yield put({type: "WHETHER_FETCH_SUCCEEDED", body: response});
    } catch (e) {
      yield put({type: "WHETHER_FETCH_FAILED", message: e.message});
    }
 }
 
 function* rootSaga() {
   yield takeEvery("GET_COUTRY_SAGA", fetchWhetherByCountry);
 }
 
 export default rootSaga;