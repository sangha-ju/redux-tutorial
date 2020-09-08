import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 마우스 클릭 이벤트가 payload 안에 들어가지 않도록
// () => undefind 를 두 번째 파라미터로 넣어 준다.
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(1000); // 1초를 기다린다.
    yield put(increase()); // 특정 액션을 디스패치 한다.
}

function* decreaseSaga() {
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga() {
    // takeEvery 는 들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    // takeLatest 는 기존에 진행 중이던 작업이 있다면 취소처리 하고
    // 가장 마지막으로 실행 된 작업만 수행한다.
    yield takeLatest(DECREASE_ASYNC, decreaseSaga);
}

const initialState = 0;

const counter = handleActions(
    {
        // [INCREASE]: (state, action) => ({ number: state.number + 1 }),
        // [DECREASE]: (state, action) => ({ number: state.number - 1 }),
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1
    },
    initialState
);

export default counter;

// function counter(state = initialState, action) {
//     switch(action.type) {
//         case INCREASE:
//             return {
//                 number: state.number + 1
//             };
//         case DECREASE:
//             return {
//                 number: state.number - 1
//             };
//         default:
//             return state;
//     }
// }


