import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';

function* editShoesSaga() {
    yield takeLatest('fetch_edit_shoe', getEditShoes);
    yield takeLatest('edit_shoe', editShoe);
}

function* getEditShoes(action) {
    try {
        const response = yield axios.get(`/account/edit/${action.payload}`);
        yield put({
            type: 'get_edit_shoe',
            payload: response.data
        })
    } catch (err) {
        console.log('Error in accountDetail:', err)
    }
}//end getEditShoes

function* editShoe(action) {
    console.log('------> in editShoe', action.payload);
    let id = action.payload.shoe.post_id;
    let postName = action.payload.shoe.post_name;
    let postCat = action.payload.shoe.post_cat;
    let category = action.payload.shoe.cat_id
    let description = action.payload.shoe.post_body;
    // let image = action.payload.image;
    let date = action.payload.updatedDate;
    try {
        yield axios.put(`/account/edit/update/${id}`, {postName, postCat, category, description, date})
    } catch (err) {
        console.log('Error in editShoe:', err);
    }
};//end editShoe


export default editShoesSaga;