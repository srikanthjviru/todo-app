import * as actions from "./actionTypes";

export function getTodos() {
  return {
    type: "GET_TODOS"
  };
}
export function addTodo(task) {
  return {
    type: actions.CREATE_TODO,
    task
  };
}

export function deleteTodo(taskId) {
  return {
    type: actions.DELETE_TODO,
    taskId
  };
}

export function completeTodo(taskId) {
  return {
    type: actions.COMPLETE_TODO,
    taskId
  };
}
