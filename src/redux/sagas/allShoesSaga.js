import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

//watcher
function* allShoesSaga(){
    yield takeLatest('fetch_all', allShoes)
};//end watcher

//generator
function* allShoes(){
    try{
        const response = yield axios.get('/shoes/all')
        yield put({
            type: 'get_all',
            payload: response.data
        })
    }catch(err){
        console.log('Error in all shoes saga:', err)
    }
};//end sellShoes

export default allShoesSaga;