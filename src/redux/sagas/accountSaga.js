import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects'

//watcher saga
function* accountSaga(){
    yield takeLatest('fetch_account', getAccount);
};//end accountSaga

//generator function
function* getAccount(){
    console.log('------> in getAccount saga')
    try{
        //send GET request to /accounts and send data to our reducer
        const response = yield axios.get(`/accounts`)
        yield put({
            type: 'get_account',
            payload: response.data
        })
    }catch(err){
        console.log('Error in getAccount saga:', err)
    };//end try
};//end generator function

export default accountSaga;