const mainPageReducer = (state = [], action) => {
    console.log('------> in mainPageReducer', action.payload);
    if(action.type === 'GET_MAIN'){
        return action.payload;
    }
    return state;
};//end mainPageReducer

export default mainPageReducer;