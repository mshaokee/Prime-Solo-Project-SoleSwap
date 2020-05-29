import axios from 'axios';
import {takeLatest, put} from 'redux-saga/effects';

//watcher saga
function* tradeDetailsSaga(){
    yield takeLatest('fetch_trade_detail', tradeDetail);
};//end watcher saga

//generator function
function* tradeDetail(action){
    //action.payload will be the id which we are sending as params
    console.log('-----> in tradeDetail Saga.');
    try{
        //axios get request and send our shoe id as params.
        const response = yield axios.get(`/details/trade/${action.payload}`)
        //sending data to our reducer after back from server.
        yield put({
            type: 'get_trade_details',
            payload: response.data
        })
    }catch(err){
        console.log('Error in tradeDetail saga:', err)
    };//end try
};//end generator function

export default tradeDetailsSaga;