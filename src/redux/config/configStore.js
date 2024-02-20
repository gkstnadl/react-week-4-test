import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import modal from "../modules/modal";
import auth from "../modules/auth";
import fanletter from "../modules/fanletter";

const loadState = () => {
    try {
        const getFanlettersState = localStorage.getItem('fanletters');
        if (getFanlettersState === null) {
            return undefined; // 로컬 스토리지에 데이터가 없는 경우
        }
        return JSON.parse(getFanlettersState); // 로컬 스토리지에서 상태 불러오기
    } catch (err) {
        return undefined;
    }
};

const fanletterDataState = loadState();

const store = configureStore({
    reducer: {
        signup,
        auth,
        modal,
        fanletter
    },
    preloadedState: { fanletter: fanletterDataState },
});

store.subscribe(() => {
    const state = store.getState();
    const fanletterState = state.fanletter;
    const getFanlettersState = JSON.stringify(fanletterState);
    localStorage.setItem('fanletters', getFanlettersState);
});


export default store;
