const allShoesReducer = (state = [], action) => {
    if(action.type === 'get_all'){
        return action.payload;
    }
    return state;
};//end sellReducer

export default allShoesReducer;