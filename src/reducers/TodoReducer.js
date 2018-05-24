import * as actions from "../actions/actionTypes";

const initialState = {
  todoList: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS_SUCCESS":
    case "CREATE_TODO_SUCCESS":
      return Object.assign(
        {},
        { todoList: [action.payload.task || []].concat(state.todoList) }
      );
    case actions.CREATE_TODO:
      return Object.assign(
        {},
        { todoList: [action.task].concat(state.todoList) || [] }
      );
    case actions.DELETE_TODO:
      return Object.assign(
        {},
        {
          todoList:
            state.todoList.filter(todo => todo.id !== action.taskId) || []
        }
      );
    case actions.COMPLETE_TODO:
      const todos = state.todoList.map(todo => {
        if (todo.id === action.taskId) {
          todo.completed = true;
        }
        return todo;
      });
      return Object.assign({}, { todoList: todos });
    default:
      return state;
  }
};
