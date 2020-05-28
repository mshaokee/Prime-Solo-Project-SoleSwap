import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

//watcher saga
function* buyShoesSaga(){
    yield takeLatest('fetch_buy', buyShoes)
};//end watcher saga

//generator function
function* buyShoes(action){
    console.log('-----> in buyShoes');
    try{
        const response = yield axios.get('/buy');
        yield put({
            type: 'get_buy',
            payload: response.data
        })
    }catch(err){
        console.log('Error in buy shoes saga:', err);
    }
};//end buyShoes page

export default buyShoesSaga;