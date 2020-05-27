const shoeBoxReducer = (state = [], action) => {
    // console.log('-------> in shoeBoxReducer');
    if (action.type === 'GET_shoebox') {
        return action.payload;
    }
    return state;
};//end shoeBoxReducer

export default shoeBoxReducer;