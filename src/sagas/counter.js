import { call, put, takeEvery } from "redux-saga/effects";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counter/counterSlice";
import {
  BY_AMOUNT_INCREMENT,
  DECREMENT,
  INCREMENT,
} from "../constants/counter";
function* Increment() {
  yield put(increment());
}
function* Decrement() {
    
  yield put(decrement());
}
function* byAmountIncrement({ payload }) {
  console.log("amount", payload);
  yield put(incrementByAmount(payload));
}

function* watchIncrement() {
  yield takeEvery(INCREMENT, Increment);
}
function* watchDecrement() {
  yield takeEvery(DECREMENT, Decrement);
}
function* watchByAmountIncrement() {
  yield takeEvery(BY_AMOUNT_INCREMENT, byAmountIncrement);
}



export default [watchIncrement(), watchDecrement(), watchByAmountIncrement()];
