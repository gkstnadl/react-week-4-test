import { createStore, combineReducers } from 'redux';
import fanLetterReducer from '../modules/Reducer';

const setLocalState = localStorage.getItem('fanLetters')
    ? JSON.parse(localStorage.getItem('fanLetters'))
    : {};

const rootReducer = combineReducers({
    fanLetters: fanLetterReducer, // 'fanLetterReducer' 리듀서가 'fanLetters' 상태를 관리
});

const store = createStore(
    rootReducer,
    { fanLetters: setLocalState }, // 초기 상태 설정
);


export default store;
