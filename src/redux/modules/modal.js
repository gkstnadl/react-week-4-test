import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: '',
    showConfirmButton: true,
    showModal: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModal: (state, action) => {
            state.message = action.payload.message;
            state.showConfirmButton = action.payload.showConfirmButton;
            state.showModal = true;
        },
        closeModal: (state) => {
            state.showModal = false;
        },
    }
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;

