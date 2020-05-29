import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//watcher saga
function* buyDetailsSaga() {
    yield takeLatest('fetch_buy_detail', buyDetails)
};//end watcher saga

//generator function
function* buyDetails(action) {
    console.log('-----> in buyShoes');
    try {
        const response = yield axios.get(`/details/buy/${action.payload}`);
        yield put({
            type: 'get_buy_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in buy shoes saga:', err);
    }
};//end buyDetails page

export default buyDetailsSaga;