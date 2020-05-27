import { put, takeLatest } from 'redux-saga/effects';
// import axios from 'axios';

//watcher saga
function* selectShoeSaga(){
    yield takeLatest('select_shoe', selectShoe)
};//end watch select shoe

//generator function
function* selectShoe(action){
    yield put ({
        type: 'current_shoe',
        payload: action.payload
    })
};//end selectShoe

export default selectShoeSaga;
