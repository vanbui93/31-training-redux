import * as types from "./../constants/ActionTypes";


var random = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
}

var generateID = () => {
    return random() + random() + '-' +random() + '-' + random() + '-' + random() + '-' + random() + '-' + random() + '-' + random();
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
        
        default:
            return state; 
    }
}

export default myReducer;