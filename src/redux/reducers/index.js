import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import getShoesReducer from './getShoesReducer';
import shoeBoxReducer from './shoeBoxReducer';
import selectShoeReducer from './selectShoeReducer';
import buyReducer from './buyReducer';
import sellReducer from './sellReducer';
import getSellDetail from './getSellDetail';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  getShoesReducer, // gets data for home page
  shoeBoxReducer, //gets data for shoe box page
  selectShoeReducer, //transfers data on click of shoe
  buyReducer, //gets data specifically for buy page
  sellReducer, //sell reducer
  getSellDetail, //get sell details
});

export default rootReducer;
