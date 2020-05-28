const buyReducer = (state =[], action) => {
    if(action.type === 'get_buy'){
        return action.payload;
    }
    return state;
};//end buyReducer

export default buyReducer;