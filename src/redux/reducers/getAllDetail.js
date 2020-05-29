const getAllDetail = (state = [], action) => {
    if (action.type === 'get_all_detail'){
        return action.payload;
    }
    return state;
};//end getAllDetail

export default getAllDetail;