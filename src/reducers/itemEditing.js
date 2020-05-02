import * as types from './../constants/ActionTypes';

// vì isDisplayForm trả về true/false, còn task.js trả về mảng [], nên ko có gì lưu được, phải tại file mới để lưu object {}
//itemEditing {}
var initialState = {
    id: '',
    name: '',
    status: false
}; 
var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_TASK:
            return action.task;
        default:
            return state; 
    }
}

//nếu đặt là myReducer thì copy ra khỏi phải sửa lại mất công import, mặc dù đặt itemEditing cũng được
export default myReducer;