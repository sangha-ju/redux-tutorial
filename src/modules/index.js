import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import todos from "./todos";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    counter,
    todos,
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐주는 역할
    yield all([counterSaga()]);
}

export default rootReducer;