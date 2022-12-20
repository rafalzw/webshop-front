import { userStart, userSuccess, userFail, userLogout, userCheck } from './userRedux';
import { url } from '../config/config';
import axios from 'axios';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

type UserLogin = {
  username: string;
  password: string;
};

export const login = async (dispatch: Dispatch<AnyAction>, user: UserLogin) => {
  dispatch(userStart());
  try {
    const res = await axios.post(`${url}/auth/login`, user, {
      withCredentials: true,
    });
    dispatch(userSuccess(res.data));
  } catch (err) {
    dispatch(userFail());
  }
};

export const checkLogin = async (dispatch: Dispatch<AnyAction>) => {
  try {
    const res = await axios.get(`${url}/auth/check`, { withCredentials: true });
    dispatch(userCheck(res.data));
  } catch {
    dispatch(userCheck(null));
  }
};
