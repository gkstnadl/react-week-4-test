import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, changeProfile, deleteProfile } from '../../loginApi';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    avatar: null,
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

// 유저정보 불러오기
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

// 프로필 업데이트
export const updateUserProfile = createAsyncThunk(
    'users/updateProfile',
    async (userData, thunkAPI) => {
        try {
            const response = await changeProfile(userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// API요청 가지고와서 프로필 삭제
export const deleteUserProfile = createAsyncThunk(
    'users/deleteProfile',
    async (userData, thunkAPI) => {
        try {
            const response = await deleteProfile(userData);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
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
                state.user = { ...action.payload };
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
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.user = { ...state.user, ...action.payload };
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
                console.error('Profile update failed:', action.payload);
            });
    },
});

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;