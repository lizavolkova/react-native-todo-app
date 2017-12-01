import {
  ADD_TODO,
  SAVE_TO_DO,
  SET_TO_DO_IN_PROGRESS,
  COMPLETE_TO_DO } from '../actions/ToDoActions'

const initialState = {
    todos: [{
        name: 'first to do',
        text: 'This is a description of the to do and what it is all about',
        id: 0,
        completed: true,
        inProgress: false,
        image: 'http://www.placehold.it/100x100'
    },
      {
        name: 'second to do',
        text: 'This is a description of the to do and what it is all about',
        id: 1,
        completed: false,
        inProgress: false,
        image: 'http://www.placehold.it/100x100'
      }]
}

export default function toDoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    name: action.todo.name || '',
                    text: action.todo.text || '',
                    image: action.todo.image || 'http://www.placehold.it/100x100',
                    id: state.todos.length + 1,
                    completed: false,
                    editing: false
                })
            };
        case SAVE_TO_DO:
          console.log(action)
          return {
            ...state,
            todos: state.todos.map((todo) => {
              return (todo.id === action.todo.id)
                    ? action.todo
                    : todo
            })
          };
        case SET_TO_DO_IN_PROGRESS:
            const todos = state.todos.map((todo) => {
                return (todo.id === action.id)
                    ? {...todo, editing: !todo.editing}
                    : todo
            });

            return {
                ...state,
                todos
            }
        case COMPLETE_TO_DO:
            const todosToComplete = state.todos.map((todo) => {
                return (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            });

            console.log(todosToComplete);
            return {
                ...state,
                todos: todosToComplete
            }
        default:
            return state

    }
}