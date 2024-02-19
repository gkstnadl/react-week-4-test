import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import modal from "../modules/modal";
import auth from "../modules/auth";

const store = configureStore({
    reducer: {
        signup,
        auth,
        modal
    }
});

export default store;
