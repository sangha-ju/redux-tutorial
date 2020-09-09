import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import todos from "./todos";
import sample from './sample';
import loading from './loading';
import { all } from "redux-saga/effects";
import { sampleSaga } from "./sample";

const rootReducer = combineReducers({
    counter,
    todos,
    sample,
    loading
});

export function* rootSaga() {
    // all 함수는 여러 사가를 합쳐주는 역할
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;