import { call, put, takeEvery } from "redux-saga/effects";
import { addTask, deleteTask, editTask } from "../features/todo/todoSlice";
import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "../constants/todo";

function* addTodoTask({ payload }) {
  console.log("payload", payload);
  yield put(addTask(payload));
}
function* editTodoTask({ payload }) {
  yield put(editTask(payload));
}
function* deleteTodoTask({ payload }) {
  yield put(deleteTask(payload));
}

function* watchAddTask() {
  yield takeEvery(ADD_TASK, addTodoTask);
}
function* watchEditTask() {
  yield takeEvery(EDIT_TASK, editTodoTask);
}
function* watchDeleteTask() {
  yield takeEvery(DELETE_TASK, deleteTodoTask);
}

export default [watchAddTask(), watchEditTask(), watchDeleteTask()];
