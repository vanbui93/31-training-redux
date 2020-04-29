import { createStore } from 'redux';
import {toggleStatus, sort} from './actions/index'

//khởi tạo ban đầu oldState
var initialOldState = {
  status : false,
  sort: {
    by: 'name',
    value: 1 //1 tăng, -1 giảm
  }
}

var myReducer = (state = initialOldState, action) => {
  //(*)
  if(action.type === 'TOGGLE_STATUS'){
    state.status = !state.status
    return state;
  }
  if(action.type === 'SORT') {
    // console.log(action); //state cũ
    
    var { by,value } = action.sort  //by = action.sort.by
    var { status } = state; //status = state.status

    //cập nhật state mới
    return {
      status : status, //status cũ
      sort : {
        by: by,         //by, valua mới
        value: value
      }
    }

    // cập nhập state mới, thực hiện phép gán, nếu viết theo cách này nó sẽ ghi đè lên vùng nhớ state cũ => ko làm cách này
    // state.sort = {
    //   by: action.sort.by,
    //   value: action.sort.value
    // }
    // return state; 
  }
  return state
}

const store = createStore(myReducer); // store quản lý reducer , reducer quản lý state,action
console.log('Đây là state mặc định default', store.getState()); //log ra để kiểm tra



store.dispatch(toggleStatus()); // store gọi tới dispatch => gửi action vào reducer (*)
console.log('Đây là state sau khi TOGGLE_STATUS', store.getState());



store.dispatch(sort({
  by: 'name',
  value: -1
}));

console.log("ACTION SORT", store.getState());

