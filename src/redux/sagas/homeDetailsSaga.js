import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//watcher saga
function* homeDetailsSaga() {
    yield takeLatest('fetch_home_detail', homeDetails)
};//end watcher saga

//generator function
function* homeDetails(action) {
    console.log('-----> in homeDetails');
    try {
        const response = yield axios.get(`/details/home/${action.payload}`);
        yield put({
            type: 'get_home_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in home shoes saga:', err);
    }
};//end buyDetails page

export default homeDetailsSaga;