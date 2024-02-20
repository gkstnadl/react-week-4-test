import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../api';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// 로그인 thunk
export const loginUser = createAsyncThunk(
    'users/login',
    async (loginData, thunkAPI) => {
        try {
            const data = await login(loginData);
            // 로그인 성공 시, 토큰을 localStorage에 저장
            localStorage.setItem('user', JSON.stringify(data));
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// 로그인 불러오기
export const loadUser = createAsyncThunk(
    'users/load',
    async (loginData, thunkAPI) => {
        const storedUserData = localStorage.getItem('user');
        if (storedUserData) {
            return JSON.parse(storedUserData);
        }
        return thunkAPI.rejectWithValue('유저 데이터가 없습니다.');
    }
);



const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('user');
            state.user = null;
            state.isSuccess = false;
            state.isError = false;
            state.isLoading = false;
            state.message = '';
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload.message;
                state.user = null;
            })
            .addCase(loadUser.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.message = '';
            })
            .addCase(loadUser.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
                state.user = null;
                state.isSuccess = false;
                state.isLoading = false;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;