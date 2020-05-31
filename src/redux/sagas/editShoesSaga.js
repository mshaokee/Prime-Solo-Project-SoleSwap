import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* editShoesSaga() {
    yield takeLatest('fetch_account_shoe', getEditShoes);
}

function* getEditShoes(action){
    try {
        const response = yield axios.get(`/account/edit/${action.payload}`);
        yield put({
            type: 'get_account_shoe',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in accountDetail:', err)
    }
}//end getEditShoes


export default editShoesSaga;