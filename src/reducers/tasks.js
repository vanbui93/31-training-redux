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
    switch (action.type) {
        case types.LIST_ALL:
            return state;    
        case types.ADD_TASK:
            var newTask = {
                id: generateID(),
                name: action.task.name,
                status: action.task.status
            }
            state.push(newTask); //state ban đầu là data: [];
            localStorage.setItem('tasks', JSON.stringify(state)); //đưa lên localStorage để lưu dưới dạng string
            console.log(action);
            return [...state];
        case types.UPDATE_STATUS_TASK:
            console.log(action);
            var id = action.id;
            var index = findIndex(state, id);
            state[index].status = !state[index].status;
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
            // if (index !== -1) {
            // tasks[index].status = ! tasks[index].status;
            // this.setState({
            //     tasks: tasks
            // });
            // localStorage.setItem('tasks', JSON.stringify(tasks));
            // }            
        default:
            return state; 
    }
}

export default myReducer;