import { ADD_TODO, EDIT_TO_DO, COMPLETE_TO_DO } from '../actions/ToDoActions'

const initialState = {
    todos: [{
        name: 'first to do',
        id: 0,
        completed: false,
        editing: false
    },
      {
        name: 'second to do',
        id: 1,
        completed: false,
        editing: false
      },
      {
        name: 'third to do',
        id: 2,
        completed: false,
        editing: false
      }]
}

export default function toDoReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: state.todos.concat({
                    name: action.todo.name,
                    id: state.todos.length + 1,
                    completed: false,
                    editing: false
                })
            }
        case EDIT_TO_DO:
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
            // const todos = state.todos.map((todo) => {
            //     return (todo.id === action.id)
            //         ? {...todo, completed: !todo.completed}
            //         : todo
            // });

            return {
                ...state
            }
        default:
            return state

    }
}