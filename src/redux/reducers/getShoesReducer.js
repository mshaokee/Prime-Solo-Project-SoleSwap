const getShoesReducer = (state = [], action) => {
    // console.log('------> in getShoesReducer');
    if (action.type === 'GET_SHOES') {
        return action.payload;
    }
    return state;
};//end mainPageReducer

export default getShoesReducer;