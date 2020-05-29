import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//watcher saga
function* homeSaga() {
    yield takeLatest('fetch_shoes', home)
};//end watcher saga

//generator function
function* home() {
    console.log('-----> in home');
    try {
        const response = yield axios.get('/shoes');
        yield put({
            type: 'get_home',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in home shoes saga:', err);
    }
};//end homeSaga page

export default homeSaga;