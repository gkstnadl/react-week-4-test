import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import modal from "../modules/modal";
import auth from "../modules/auth";
import fanletter from "../modules/fanletter";


const store = configureStore({
    reducer: {
        signup,
        auth,
        modal,
        fanletter
    },
});

export default store;
