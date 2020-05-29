const getTradeDetail = (state = [], action) => {
    if (action.type === 'get_trade_detail') {
        return action.payload;
    }
    return state;
};//end reducer

export default getTradeDetail;