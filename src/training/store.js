import { createStore } from 'redux';
import { toggleStatus, sort } from './actions/index'
import myReducer from './reducers/index'


const store = createStore(myReducer); // store quản lý reducer , reducer quản lý state,action
console.log('state DEFAULT', store.getState()); //log ra để kiểm tra



store.dispatch(toggleStatus()); // store gọi tới dispatch => gửi action vào reducer (*)
console.log('ACTION: TOGGLE_STATUS', store.getState());



store.dispatch(sort({
    by: 'name',
    value: -1
}));

console.log("ACTION: SORT", store.getState());

