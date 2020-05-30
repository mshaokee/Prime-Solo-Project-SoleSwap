const accountsReducer = (state = [], action) => {
    console.log('-------> in accountsReducer');
    if(action.type === 'get_account'){
        return action.payload;
    }
    return state;
};//end accounts Reducer

export default accountsReducer;