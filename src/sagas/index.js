import { takeEvery } from "redux-saga";
import { put, call } from "redux-saga/effects";
import * as actions from "../actions/actionTypes";

const BASE_URL = "https://practiceapi.devmountain.com/api";

/* GET ALL TASK API */
function* getTasks() {
  return yield fetch(`${BASE_URL}/tasks`, {
    method: "GET"
  });
}

/* CREATE TASK API */
function* createTask(title) {
  const requestData = { title };
  return yield fetch(`${BASE_URL}/tasks`, {
    method: "POST",
    body: JSON.stringify(requestData)
  });
}

/* DELETE TASK API */
function* deleteTask(id) {
  return yield fetch(`${BASE_URL}/tasks/${id}`, {
    method: "DELETE"
  });
}

/* COMPLETE TASK API */
function* completeTask(id) {
  return yield fetch(`${BASE_URL}/tasks/${id}`, {
    method: "PUT"
  });
}

function* getTodos() {
  // const response = yield getTasks();
  // const json = yield response.json();
  yield put({ type: "GET_TODOS_SUCCESS", payload: { task: {} } });
}

function* createTodo(data) {
  // const response = yield createTask(data.task);
  // const json = yield response.json();
  // yield put({ type: "CREATE_TODO_SUCCESS", payload: data });
}

function* deleteTodo(data) {
  // const response = yield deleteTask(data.taskId);
  // const json = response.json();
  // yield put({ type: actions.DELETE_TODO, payload: data });
}

function* completeTodo(data) {
  // const response = yield completeTask(data.taskId);
  // const json = response.json();
  // yield put({ type: actions.COMPLETE_TODO, payload: data });
}

export default function* rootSaga() {
  // yield takeEvery("GET_TODOS", getTodos);
  yield takeEvery(actions.CREATE_TODO, createTodo);
  yield takeEvery(actions.DELETE_TODO, deleteTodo);
  yield takeEvery(actions.COMPLETE_TODO, completeTodo);
}
