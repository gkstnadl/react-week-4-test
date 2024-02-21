import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { getRandomColor } from "./getRandomColor";
import api from "../../api";

const initialState = {
    letters: [],
}

/** 팬레터 json서버에서 조회하기 */
export const fetchFanLetters = createAsyncThunk(
    'fanletter/fetchFanLetters',
    async () => {
        const response = await api.get('/fanletters');
        return response.data;
    }
);

/** 팬레터 json서버에 추가하기 */
export const addFanLetter = createAsyncThunk(
    'fanletter/addFanLetter',
    async ({ nickname, content, member, avatar }, thunkAPI) => {
        const userId = thunkAPI.getState().auth.user.userId;
        const response = await api.post('/fanletters', {
            id: nanoid(),
            nickname,
            content,
            member,
            avatar,
            sentTime: new Date().toISOString(),
            userId,
        });
        return response.data;
    }
);

/** 팬레터 json서버에서 수정하기 */
export const updateFanLetter = createAsyncThunk(
    'fanletter/updateFanLetter',
    async ({ id, content }) => {
        const response = await api.patch(`/fanletters/${id}`, {
            content,
        });
        return response.data;
    }
);

/** 팬레터 json서버에서 삭제하기 */
export const deleteFanLetter = createAsyncThunk(
    'fanletter/deleteFanLetter',
    async (id) => {
        await api.delete(`/fanletters/${id}`);
        return id;
    }
);

const fanletterSlice = createSlice({
    name: 'fanletter',
    initialState,
    reducers: {
        clearLetters: (state) => {
            state.letters = [];
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFanLetters.fulfilled, (state, action) => {
                state.letters = action.payload;
            })
            .addCase(addFanLetter.fulfilled, (state, action) => {
                state.letters.push(action.payload);
            })
            .addCase(updateFanLetter.fulfilled, (state, action) => {
                const index = state.letters.findIndex(letter => letter.id === action.payload.id);
                if (index !== -1) {
                    state.letters[index] = action.payload;
                }
            })
            .addCase(deleteFanLetter.fulfilled, (state, action) => {
                state.letters = state.letters.filter(letter => letter.id !== action.payload);
            });
    }
});


export default fanletterSlice.reducer;