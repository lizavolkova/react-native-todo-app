export const ADD_TODO = 'ADD_TODO';
export function addToDo(todo) {
    return {
        type: ADD_TODO,
        todo
    };
}

export const SET_TO_DO_IN_PROGRESS = 'SET_TO_DO_IN_PROGRESS';
export function setToDoInProgress(id) {
    return {
        type: SET_TO_DO_IN_PROGRESS,
        id
    };
}

export const COMPLETE_TO_DO = 'COMPLETE_TO_DO';
export function completeToDo(id) {
    return {
        type: COMPLETE_TO_DO,
        id
    };
}

export const SAVE_TO_DO = 'SAVE_TO_DO';
export function saveToDo(todo) {
  return {
    type: SAVE_TO_DO,
    todo
  };
}



