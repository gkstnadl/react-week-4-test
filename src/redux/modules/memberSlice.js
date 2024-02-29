import { createSlice } from "@reduxjs/toolkit";

export const members = ['정국', '뷔', '지민', '슈가', '진', 'RM', '제이홉'];

const initialState = "정국";

const memberSlice = createSlice({
    name: "member",
    initialState,
    reducers: {
        setMember: (state, action) => {
            const activeMember = action.payload;
            return activeMember;
        },
    },
});

export const { setMember } = memberSlice.actions;
export default memberSlice.reducer;
