import { all } from "redux-saga/effects";
import counter from "./counter";
import todo from "./todo";
import auth from "./auth";
function* rootSaga() {
  yield all([...counter, ...todo, ...auth]);
}
export default rootSaga;
