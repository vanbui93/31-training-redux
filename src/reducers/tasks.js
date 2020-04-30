import * as types from "../constants/ActionTypes";

var initialState = [
{
    id: 1,
    name: 'Học React js',
    status: true
}
]; //vì tasks = []

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;    
        default:
            return state; 
    }
}

export default myReducer;