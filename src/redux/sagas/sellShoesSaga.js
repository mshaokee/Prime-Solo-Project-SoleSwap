import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

//watcher
function* sellShoesSaga(){
    yield takeLatest('fetch_sell', sellShoes)
};//end watcher

//generator
function* sellShoes(){
    try{
        const response = yield axios.get('/sell')
        yield put({
            type: 'get_sell',
            payload: response.data
        })
    }catch(err){
        console.log('Error in sell shoes saga:', err)
    }
};//end sellShoes

export default sellShoesSaga;