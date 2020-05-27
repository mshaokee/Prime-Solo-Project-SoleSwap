import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//watcher saga
function* shoeBoxSaga(){
    yield takeLatest('FETCH_shoeBox', shoeBox)
};//end watcher saga

//generator function
function* shoeBox(){
    console.log('------>in Shoe Box');
    try{
        const response = yield axios.get('/shoes/shoebox')
        yield put({
            type: 'GET_shoebox',
            payload: response.data
        })
    }catch(err){
        console.log('Error in Shoe Box generator.', err);
    };//end try
    
};//end shoeBox generator

export default shoeBoxSaga;