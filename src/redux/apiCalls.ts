import { loginFail, loginStart, loginSuccess } from './userRedux';
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
    const res = await axios.post(`${url}/auth/login`, user);
    console.log(res);
    dispatch(loginSuccess(res.data.data));
  } catch (err) {
    dispatch(loginFail());
  }
};
