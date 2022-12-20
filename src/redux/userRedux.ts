import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from 'types';

export interface UserState {
  user: UserInterface | null;
  loading: boolean;
  error: boolean;
}

const initialState: UserState = {
  user: null,
  loading: false,
  error: false,
};

export const userRedux = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<UserInterface>) => {
      state.loading = false;
      state.error = false;
      state.user = state.user = action.payload;
    },
    loginFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      return initialState;
    },
    check: (state, action: PayloadAction<UserInterface | null>) => {
      state.user = state.user = action.payload;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout, check } = userRedux.actions;

export default userRedux.reducer;
