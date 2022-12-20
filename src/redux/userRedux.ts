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
    userStart: (state) => {
      state.loading = true;
    },
    userSuccess: (state, action: PayloadAction<UserInterface>) => {
      state.loading = false;
      state.error = false;
      state.user = state.user = action.payload;
    },
    userFail: (state) => {
      state.loading = false;
      state.error = true;
    },
    userLogout: (state) => {
      return initialState;
    },
    userCheck: (state, action: PayloadAction<UserInterface | null>) => {
      state.user = state.user = action.payload;
    },
  },
});

export const { userStart, userSuccess, userFail, userLogout, userCheck } = userRedux.actions;

export default userRedux.reducer;
