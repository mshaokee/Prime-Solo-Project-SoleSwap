import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

//watcher saga to receive information from components
function* watchMainPageSaga(){
    yield takeLatest('GET_MAIN', fetchMain)
};//end watcher

//generator functions
function* fetchMain(){
    console.log('-----> in fetchMain generator');
    
};//end fetchMain

export default watchMainPageSaga;