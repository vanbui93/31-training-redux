import { combineReducers } from 'redux';
import tasks from './tasks'

const myReducer = combineReducers({
    tasks    //tasks: tasks lấy từ reducer/tasks
});
export default myReducer;