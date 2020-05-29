import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//watcher
function* sellDetailsSaga() {
    yield takeLatest('fetch_sell_detail', sellDetails)
}

function* sellDetails(action) {
    try {
        const response = yield axios.get(`/details/sell/${action.payload}`)
        yield put({
            type: 'get_sell_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in sell shoes saga:', err)
    }
}

export default sellDetailsSaga;