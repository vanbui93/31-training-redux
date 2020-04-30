import * as types from "../constants/ActionTypes";

// lên localStorage lấy danh sách
var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data: []; //vì tasks = []

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            return state;    
        default:
            return state; 
    }
}

export default myReducer;