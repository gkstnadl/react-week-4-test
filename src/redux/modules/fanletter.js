import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { getRandomColor } from "./getRandomColor";

const initialState = {
    letters: [],
}

export const fanletterSlice = createSlice({
    name: "fanletter",
    initialState,
    reducers: {
        addFanLetter: {
            reducer(state, action) {
                state.letters.push(action.payload); //immer 라이브러리가 있어서 불변성 유지 가능
            },
            prepare({ nickname, content, member }) {
                return {
                    payload: {
                        id: nanoid(),
                        nickname,
                        content,
                        sentTime: new Date().toISOString(),
                        member,
                        color: getRandomColor(),
                    }
                }
            }
        },
        updateFanLetter(state, action) {
            const { id, newContent } = action.payload;
            const letter = state.letters.find(letter => letter.id === id);
            if (letter) {
                letter.content = newContent;
            }
        },
        deleteFanLetter(state, action) {
            state.letters = state.letters.filter(letter => letter.id !== action.payload);
        }
    }
});

export const { addFanLetter, updateFanLetter, deleteFanLetter } = fanletterSlice.actions;

export default fanletterSlice.reducer;