import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

//watcher
function* detailsSaga() {
    yield takeLatest('fetch_all_detail', allDetail);
    yield takeLatest('fetch_buy_detail', buyDetails);
    yield takeLatest('fetch_sell_detail', sellDetails);
    yield takeLatest('fetch_home_detail', homeDetails);
    yield takeLatest('fetch_trade_detail', tradeDetail);
};//end watcher

//generator for all Details
function* allDetail(action) {
    try {
        const response = yield axios.get(`/details/all/${action.payload}`)
        yield put({
            type: 'get_all_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in all shoes details saga:', err)
    }
};//end allDetail

//generator for buy Details
function* buyDetails(action) {
    console.log('-----> in buyShoes');
    try {
        const response = yield axios.get(`/details/buy/${action.payload}`);
        yield put({
            type: 'get_buy_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in buy shoes saga:', err);
    }
};//end buyDetails page

//generator for sell Details
function* sellDetails(action) {
    try {
        const response = yield axios.get(`/details/sell/${action.payload}`)
        yield put({
            type: 'get_sell_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in sell shoes saga:', err)
    }
};//end sellDetails

//generator for home Details
function* homeDetails(action) {
    console.log('-----> in homeDetails');
    try {
        const response = yield axios.get(`/details/home/${action.payload}`);
        yield put({
            type: 'get_home_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in home shoes saga:', err);
    }
};//end homeDetails page

//generator for trade Details
function* tradeDetail(action) {
    //action.payload will be the id which we are sending as params
    console.log('-----> in tradeDetail Saga.');
    try {
        //axios get request and send our shoe id as params.
        const response = yield axios.get(`/details/trade/${action.payload}`)
        //sending data to our reducer after back from server.
        yield put({
            type: 'get_trade_detail',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in tradeDetail saga:', err)
    };//end try
};//end tradeDetail


export default detailsSaga;