const getSellDetail = (state = [], action) => {
    if (action.type === 'get_sell_detail') {
        return action.payload;
    }
    return state;
};//end getSellDetail

export default getSellDetail;