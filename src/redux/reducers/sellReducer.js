const sellReducer = (state = [], action) => {
    if(action.type === 'get_sell'){
        return action.payload;
    }
    return state;
};//end sellReducer

export default sellReducer;