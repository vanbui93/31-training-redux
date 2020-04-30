//khởi tạo ban đầu oldState
var initialOldState = {
    by: 'name',
    value: 1 //1 tăng, -1 giảm
  }
  
  var myReducer = (state = initialOldState, action) => {
    if(action.type === 'SORT') {
      var { by,value } = action.sort  //by = action.sort.by  
      //cập nhật state mới
      return {
        by,
        value
      }
    }
    return state;
  }
  export default myReducer;