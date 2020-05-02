import * as types from "./../constants/ActionTypes";


var random = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
}

var generateID = () => {
    return random() + random() + '-' +random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random();
}

var findIndex = (tasks,id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if(task.id === id){ // kiểm tra id bằng id truyền từ TaskItem vào, thì trả về vị trí index
        result = index;
        }
    });
    return result;
}

// lên localStorage lấy danh sách
var data = JSON.parse(localStorage.getItem('tasks'));

var initialState = data ? data: []; //vì tasks = []

var myReducer = (state = initialState, action) => {

    var id = action.id;
    var index = findIndex(state,id);

    switch (action.type) {
        case types.LIST_ALL:
            return state;    
        case types.SAVE_TASK: //sửa để dùng chung add, update
            var actionTask = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }
            if(!actionTask.id) {  //nếu KHÔNG tồn tại id, ADD_TASK
                actionTask.id = generateID();
                state.push(actionTask);
            } else {             // EDIT_TASK
                index = findIndex(state, actionTask.id);
                state[index] = actionTask;    /// => thay thế task thành actionTask
            }
            
            localStorage.setItem('tasks', JSON.stringify(state)); //đưa lên localStorage để lưu dưới dạng string
            console.log(action);
            return [...state];
        case types.UPDATE_STATUS_TASK:
            console.log(action);
            // state[index].status = !state[index].status; //Nếu viết kiểu này thì ra ngoài view không cập nhật được
            
            //CÁCH 1
            // var cloneTask = {...state[index]};    //copy ra 1 object mới nên sử dụng cặp ngoặc {...}
            // cloneTask.status = !cloneTask.status; //đảo ngược status
            // // state.splice(index,1);                // xóa đi task cũ
            // // state.push(cloneTask);                // thêm task mới với status mới
            
            // //CÁCH 2
            // state[index] = cloneTask;

            //CÁCH 3
            state[index] = {...state[index], status: !state[index].status} //copy ra ...state

            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
            // if (index !== -1) {
            // tasks[index].status = ! tasks[index].status;
            // this.setState({
            //     tasks: tasks
            // });
            // localStorage.setItem('tasks', JSON.stringify(tasks));
            // }            
        case types.DELETE_TASK:
            state.splice(index,1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        default:
            return state; 
    }
}

export default myReducer;