import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

//watcher saga to receive information from components
function* getShoesSaga(){
    yield takeLatest('FETCH_SHOES', fetchShoes)
};//end watcher

//generator functions
function* fetchShoes(){
    console.log('-----> in fetchShoes generator');
    //axios GET request to server.
    try{
        const response = yield axios.get('/shoes');
        //send data from our GET to our reducer
        console.log('GET SHOES---------------->', response.data);
        yield put({
            type: 'GET_SHOES',
            payload: response.data
        })
    }catch(err){
        console.log('Error fetching Main Page Saga. Please check console.', err);
    };//end try
};//end fetchMain

export default getShoesSaga;