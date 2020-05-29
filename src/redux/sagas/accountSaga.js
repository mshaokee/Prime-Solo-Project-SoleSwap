import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects'

//watcher saga
function* accountSaga(){
    yield takeLatest('fetch_account', getAccount);
};//end accountSaga

//generator function
function* getAccount(action){
    let user = action.payload;
    console.log('------> in getAccount saga', action.payload)
    try{
        const response = yield axios.get(`/user/${user}`)
        yield put({
            type: 'get_account',
            payload: response.data
        })
    }catch(err){
        console.log('Error in getAccount saga:', err)
    };//end try
};//end generator function

export default accountSaga;