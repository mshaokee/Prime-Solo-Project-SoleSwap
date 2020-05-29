import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//watcher
function* allDetailsSaga() {
    yield takeLatest('fetch_all_detail', allDetail)
};//end watcher

//generator
function* allDetail(action) {
    try {
        const response = yield axios.get(`/details/all/${action.payload}`)
        yield put({
            type: 'get_all_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in all shoes details saga:', err)
    }
};//end allDetail

export default allDetailsSaga;