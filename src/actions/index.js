import * as types from './../constants/ActionTypes';


export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
}

export const saveTask = (task) => {
    return {
        type: types.SAVE_TASK,
        task //task: task
    }
}

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}

export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

export const updateStatusTask = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id //id:id
    }
}

export const deleteTask = (id) => {
    return {
        type: types.DELETE_TASK,
        id
    }
}

export const editTask = (task) => {
    return {
        type: types.EDIT_TASK,
        task
    }
}

export const filterTask = (filter) => {
    return {
        type: types.FILTER_TASK,
        filter // filter -> filter(filterName, filterStatus)
    }
}

export const searchTask = (keyword) => {
    return {
        type: types.SEARCH_TASK,
        keyword
    }
}

export const sortTask = (sort) => {
    return {
        type: types.SORT_TASK,
        sort //sort = {sortBy,sortValue}
    }
}