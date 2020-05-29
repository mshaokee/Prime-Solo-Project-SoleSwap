const getBuyDetail = (state =[], action) => {
    if(action.type === 'get_buy_detail'){
        return action.payload;
    }
    return state;
};//end buyReducer

export default getBuyDetail;