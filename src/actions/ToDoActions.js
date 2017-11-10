export const ADD_TODO = 'ADD_TODO';
export function addToDo(todo) {
    return {
        type: ADD_TODO,
        todo
    };
}

export const EDIT_TO_DO = 'EDIT_TO_DO';
export function editToDo(id) {
    return {
        type: EDIT_TO_DO,
        id
    };
}

export const COMPLETE_TO_DO = 'COMPLETE_TO_DO';
export function completeToDo(todo) {
    return {
        type: COMPLETE_TO_DO,
        id
    };
}


