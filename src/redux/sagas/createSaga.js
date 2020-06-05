import axios from 'axios';
import {takeLatest} from 'redux-saga/effects'

//watcher saga
function* createSaga(){
    yield takeLatest('create_post', createPost)
};//end watcher saga

//generator function
function* createPost(action){
    // console.log('------> in create Post Saga', action.payload);
    //create variables so it looks cleaner when sending down
    let description = action.payload.description;
    let image = action.payload.image;
    let title = action.payload.title;
    let catId = action.payload.catId;
    let user = action.payload.user;
    try{
        yield axios.post('/shoes/addShoe', { description, image, title, catId, user});
    }catch(err){
        console.log('Error in create post saga:', err)
    }
};//end create post

export default createSaga;