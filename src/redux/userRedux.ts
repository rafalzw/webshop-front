import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInterface } from 'types';

export interface UserState {
  user: UserInterface | null;
  loading: boolean;
  error: boolean;
}

const initialState: any = {
  currentUser: null,
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
    loginSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = false;
      state.user = action.payload;
    },
    loginFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
      return initialState;
    },
  },
});

export const { loginStart, loginSuccess, loginFail, logout } = userRedux.actions;

export default userRedux.reducer;
