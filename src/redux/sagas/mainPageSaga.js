import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

//watcher saga to receive information from components
function* watchMainPageSaga(){
    yield takeLatest('FETCH_MAIN', fetchMain)
};//end watcher

//generator functions
function* fetchMain(){
    console.log('-----> in fetchMain generator');
    //axios GET request to server.
    try{
        const response = yield axios.get('/shoes')
        //send data from our GET to our reducer
        yield put({
            type: 'GET_MAIN',
            payload: response.data
        })
    }catch(err){
        console.log('Error fetching Main Page Saga. Please check console.', err);
    };//end try
};//end fetchMain

export default watchMainPageSaga;