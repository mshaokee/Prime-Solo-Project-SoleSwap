const homeReducer = (state = [], action) => {
    if (action.type === 'get_home') {
        return action.payload;
    }
    return state;
};//end buyReducer

export default homeReducer;