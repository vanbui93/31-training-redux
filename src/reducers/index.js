import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm' 

const myReducer = combineReducers({
    tasks,                 //tasks: tasks lấy từ reducer/tasks
    isDisplayForm          //isDisplayForm: isDisplayForm
});
export default myReducer;