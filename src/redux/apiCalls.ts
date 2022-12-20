import { loginFail, loginStart, loginSuccess, check } from './userRedux';
import { url } from '../config/config';
import axios from 'axios';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';

type UserLogin = {
  username: string;
  password: string;
};

export const login = async (dispatch: Dispatch<AnyAction>, user: UserLogin) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(`${url}/auth/login`, user, {
      withCredentials: true,
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFail());
  }
};

export const checkLogin = async (dispatch: Dispatch<AnyAction>) => {
  try {
    const res = await axios.get(`${url}/auth/check`, { withCredentials: true });
    dispatch(check(res.data));
  } catch {
    dispatch(check(null));
  }
};
