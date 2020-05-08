import * as types from '../constants/ActionTypes';

var initialState = '';
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_TASK:
            // console.log(action.keyword);
            return action.keyword; //đưa keyword vào state
        default:
            return state; 
    }
}

//nếu đặt là myReducer thì copy ra khỏi phải sửa lại mất công import, mặc dù đặt itemEditing cũng được
export default myReducer;