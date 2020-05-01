import * as types from './../constants/ActionTypes';

var initialState = false; // vì có 2 giá trị true, false nên phải tạo initialState ở file riêng này

var isDisplayFrom = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            return !state;
        case types.OPEN_FORM:
            return true;
        case types.CLOSE_FORM:
            return false;
        default:
            return state; 
    }
}

export default isDisplayFrom;