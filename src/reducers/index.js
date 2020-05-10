import { combineReducers } from 'redux';
import tasks from './tasks';
import isDisplayForm from './isDisplayForm' 
import itemEditing from './itemEditing' 
import filterTask from './filterTask'
import Search from './search';
import sort from './sort';

const myReducer = combineReducers({
    tasks,                 //tasks: tasks lấy từ reducer/tasks
    isDisplayForm,          //isDisplayForm: isDisplayForm
    itemEditing,
    filterTask,
    Search,
    sort
});
export default myReducer;