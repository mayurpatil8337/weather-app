import { call } from 'redux-saga/effects';
import axios from 'axios'
export function* fetchWhether(action) {
   yield call(fetch(), action.payload.userId);
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
  