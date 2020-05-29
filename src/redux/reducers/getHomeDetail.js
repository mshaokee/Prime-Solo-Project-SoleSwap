const getHomeDetail = (state = [], action) => {
    // console.log('------> in getHomeDetail');
    if (action.type === 'get_home_detail') {
        return action.payload;
    }
    return state;
};//end getHomeDetail

export default getHomeDetail;