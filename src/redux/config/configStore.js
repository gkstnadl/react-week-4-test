import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";

const store = configureStore({
    reducer: {
        signup,
    }
});

export default store;
