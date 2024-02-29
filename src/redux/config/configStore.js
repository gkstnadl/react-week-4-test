import { configureStore } from "@reduxjs/toolkit";
import signup from "../modules/signup";
import modal from "../modules/modal";
import auth from "../modules/authSlice";
import fanletter from "../modules/fanletterSlice";

const store = configureStore({
    reducer: {
        signup,
        auth,
        modal,
        fanletter
    },
});

export default store;
