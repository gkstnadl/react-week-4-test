import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { register } from '../../api';

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// 비동기 회원가입 thunk
export const signupUser = createAsyncThunk(
  'users/signup',
  async (userData, thunkAPI) => {
    try {
      return await register(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


// 회원가입
export const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = signupSlice.actions;

export default signupSlice.reducer;