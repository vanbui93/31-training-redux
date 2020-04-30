//khởi tạo ban đầu oldState
var initialOldState = false;
  
  var myReducer = (state = initialOldState, action) => {
    //(*)
    if(action.type === 'TOGGLE_STATUS'){
      state = !state;
      return state;
    }
    return state;
  }
  export default myReducer;