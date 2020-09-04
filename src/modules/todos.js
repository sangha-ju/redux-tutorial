import { handleActions, createAction } from 'redux-actions';

const CHANGE_INPUT = "todos/CHANGE_INPUT"; // 인풋 값 변경
const INSERT = "todos/INSERT"; // 새로운 todo를 등록
const TOGGLE = "todos/TOGGLE"; // todo를 체크 or 체크 해제
const REMOVE = "todos/REMOVE"; // todo를 제거

let id = 3;

export const changeInput = createAction(CHANGE_INPUT, input => input);
export const insert = createAction(INSERT, text => ({
    id: id ++,
    text,
    done: false
}))
export const toggle = createAction(TOGGLE, id => id)
export const remove = createAction(REMOVE, id => id)

const initialState = {
    input: "",
    todos: [
        {
            id: 1,
            text: "리덕스 기초 배우기",
            done: true
        },
        {
            id: 2,
            text: "리액트와 리덕스 사용하기",
            done: false
        }
    ]
};

const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, { payload : input }) => ({ ...state, input }),
        [INSERT]: (state, { payload : todo }) => ({
            ...state,
            todos: state.todos.concat(todo)
        }),
        [TOGGLE]: (state, { payload : id }) => ({
            ...state,
            todos: state.todos.map(todo => 
                todo.id === id ? { ...todo, done : !todo.done } : todo
            )
        }),
        [REMOVE]: (state, { payload : id }) => ({
            ...state,
            todos: state.todos.filter(todo => todo.id !== id)
        })
    },
    initialState
);

// function todos(state = initialState, action) {
//     switch(action.type) {
//         case CHANGE_INPUT:
//             return {
//                 ...state,
//                 input: action.input
//             };
//         case INSERT:
//             return {
//                 ...state,
//                 todos: state.todos.concat(action.todo)
//             };
//         case TOGGLE:
//             return {
//                 ...state,
//                 todos: state.todos.map(todo =>
//                     todo.id === action.id ? { ...todo, done: !todo.done } : todo
//                 )
//             };
//         case REMOVE:
//             return {
//                 ...state,
//                 todos: state.todos.filter(todo => todo.id !== action.id)
//             };
//         default:
//             return state;
//     }
// }

export default todos;