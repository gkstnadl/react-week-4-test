import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { jsonApi } from "../../api";

const initialState = {
    letters: [],
    isLoading: true,
    isError: false,
    error: null,
};


const getLettersFromDB = async () => {
    const { data } = await jsonApi.get("/fanletters");
    return data;
};

export const __editLetter = createAsyncThunk(
    "editLetter",
    async ({ id, editingText }, thunkAPI) => {
        try {
            await jsonApi.patch(`/fanletters/${id}`, { content: editingText });
            const letters = await getLettersFromDB();
            return letters;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const __deleteLetter = createAsyncThunk(
    "deleteLetter",
    async (id, thunkAPI) => {
        try {
            await jsonApi.delete(`/fanletters/${id}`);
            const letters = await getLettersFromDB();
            return letters;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);


export const __getLetters = createAsyncThunk(
    "getLetters",
    async (payload, thunkAPI) => {
        try {
            const letters = await getLettersFromDB();
            return letters;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const __addLetter = createAsyncThunk(
    "addLetter",
    async (newLetter, thunkAPI) => {
        try {
            await jsonApi.post("/fanletters", newLetter);
            const letters = await getLettersFromDB();
            return letters;
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const letterSlice = createSlice({
    name: "fanletter",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(__addLetter.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(__addLetter.fulfilled, (state, action) => {
                state.isLoading = false;
                state.letters = action.payload;
                state.isError = false;
                state.error = null;
            })
            .addCase(__addLetter.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })
            .addCase(__getLetters.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(__getLetters.fulfilled, (state, action) => {
                state.isLoading = false;
                state.letters = action.payload;
                state.isError = false;
                state.error = null;
            })
            .addCase(__getLetters.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })
            .addCase(__deleteLetter.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(__deleteLetter.fulfilled, (state, action) => {
                state.isLoading = false;
                // 이 부분에서 페이로드를 사용하여 letters 배열을 업데이트하면 됩니다.
                // 예: 삭제된 편지를 제외하고 새로운 배열을 생성하는 로직
                state.letters = state.letters.filter(letter => letter.id !== action.meta.arg); // 예시 로직, 실제 구현은 상황에 맞게 조정
                state.isError = false;
                state.error = null;
            })
            .addCase(__deleteLetter.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            })
            .addCase(__editLetter.pending, (state, action) => {
                state.isLoading = true;
            })
            .addCase(__editLetter.fulfilled, (state, action) => {
                state.isLoading = false;
                state.letters = action.payload;
                state.isError = false;
                state.error = null;
            })
            .addCase(__editLetter.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.payload;
            });
    }
});


export default letterSlice.reducer;