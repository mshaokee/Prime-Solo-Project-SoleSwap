const details = (state = [], action) => {
    //all page details
    if (action.type === 'get_all_detail'){
        return action.payload;
    } 
    //sell page details
    else if (action.type === 'get_sell_detail') {
        return action.payload;
    }
    //trade page details
    else if (action.type === 'get_trade_detail') {
        return action.payload;
    }
    //buy page details
    else if (action.type === 'get_buy_detail') {
        return action.payload;
    }
    //home page details
    else if (action.type === 'get_home_detail') {
        return action.payload;
    }
    return state;
};//end details

export default details;