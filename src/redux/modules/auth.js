import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../api';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
};

// 비동기 로그인 thunk
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


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // 여기에 필요한 추가 리듀서를 정의할 수 있습니다.
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
            // loginUser async thunk의 처리 결과에 따른 상태 업데이트 로직을 추가합니다.
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
                state.message = action.payload.message;
                state.user = null;
            });
    },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;