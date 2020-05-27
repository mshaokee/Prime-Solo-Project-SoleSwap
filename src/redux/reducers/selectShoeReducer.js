const selectShoeReducer = (state = [], action) => {
    console.log('-------> in selectShoeReducer');
    if (action.type === 'current_shoe'){
        // ...state = action.payload;
        return action.payload;
    }
    return state;
};//end selectShoeReducer

export default selectShoeReducer;