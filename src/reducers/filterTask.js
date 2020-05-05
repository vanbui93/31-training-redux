import * as types from '../constants/ActionTypes';

// vì isDisplayForm trả về true/false, còn task.js trả về mảng [], nên ko có gì lưu được, phải tại file mới để lưu object {}
//itemEditing {}
var initialState = {
    name:'',
    status: -1 //để giá trị mặc định -1 : tất cả
}; 
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FILTER_TASK:
            // console.log(action);
            return action.filter;
        default:
            return state; 
    }
}

//nếu đặt là myReducer thì copy ra khỏi phải sửa lại mất công import, mặc dù đặt itemEditing cũng được
export default myReducer;