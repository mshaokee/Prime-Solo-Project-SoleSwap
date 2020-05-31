import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* editShoesSaga() {
    yield takeLatest('fetch_edit_shoe', getEditShoes);
    yield takeLatest('edit_shoe', editShoe);
}

function* getEditShoes(action) {
    try {
        const response = yield axios.get(`/account/edit/${action.payload}`);
        yield put({
            type: 'get_edit_shoe',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in accountDetail:', err)
    }
}//end getEditShoes

function* editShoe(action) {
    console.log('------> in editShoe', action.payload);
    
    try {
        yield axios.put(`/account/edit/update/`)
    } catch (err) {
        console.log('Error in editShoe:', err);
    }
};//end editShoe


export default editShoesSaga;