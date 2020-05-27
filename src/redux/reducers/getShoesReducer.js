const getShoesReducer = (state = [], action) => {
    console.log('------> in mainPageReducer', action.payload);
    if (action.type === 'GET_SHOES') {
        return action.payload;
    }
    return state;
};//end mainPageReducer

export default getShoesReducer;