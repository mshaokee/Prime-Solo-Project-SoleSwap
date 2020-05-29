import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import shoeBoxSaga from './shoeBoxSaga';
import homeDetailsSaga from './homeDetailsSaga';
import createSaga from './createSaga';
import buyDetailsSaga from './buyDetailsSaga';
import allShoesSaga from './allShoesSaga';
import sellDetailsSaga from './sellDetailsSaga';
import homeSaga from './homeSaga';
import tradeDetailsSaga from './tradeDetailsSaga';
import allDetailsSaga from './allDetailsSaga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    shoeBoxSaga(),
    createSaga(),
    buyDetailsSaga(),
    allShoesSaga(),
    sellDetailsSaga(),
    homeDetailsSaga(),
    homeSaga(),
    tradeDetailsSaga(),
    allDetailsSaga(),
  ]);
}
