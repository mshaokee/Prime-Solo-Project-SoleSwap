import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import getShoesSaga from './getShoesSaga';
import shoeBoxSaga from './shoeBoxSaga';
import selectShoeSaga from './selectShoeSaga'
import createSaga from './createSaga';
import buyShoesSaga from './buyShoesSaga';
import sellShoesSaga from './sellShoesSaga';
import sellDetailsSaga from './sellDetailsSaga';

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
    getShoesSaga(),
    shoeBoxSaga(),
    selectShoeSaga(),
    createSaga(),
    buyShoesSaga(),
    sellShoesSaga(),
    sellDetailsSaga(),
  ]);
}
