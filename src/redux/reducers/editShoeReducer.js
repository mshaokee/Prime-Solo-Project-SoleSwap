const editShoeReducer = (state = {}, action)=> {
    //account shoe details for that single shoe
    if (action.type === 'get_edit_shoe') {
        return action.payload[0];
    }
    //changing our title for single shoe
    if (action.type === 'change_title'){
        return {...state, post_name: action.payload};
    }
    //changing our category
    if (action.type === 'change_category'){
        return {...state, post_cat: action.payload, cat_id: action.payload};
    }
    //changing our description
    if (action.type === 'change_description') {
        return { ...state, post_body: action.payload };
    }
    return state;
};//end editShoeReducer

export default editShoeReducer;