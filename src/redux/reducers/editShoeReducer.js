const editShoeReducer = (state = [], action)=> {
    //account shoe details
    if (action.type === 'get_edit_shoe') {
        return action.payload;
    }
    return state;
};//end editShoeReducer

export default editShoeReducer;