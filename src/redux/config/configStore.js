import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import modal from "../modules/modal";

const store = configureStore({
    reducer: {
        signup,
        modal
    }
});

export default store;
