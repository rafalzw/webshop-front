import {
  userStart,
  userLoginSuccess,
  userSuccess,
  userFail,
  userLogout,
  userCheck,
} from './userRedux';
import { url } from '../config/config';
import axios from 'axios';
import { AnyAction, Dispatch } from '@reduxjs/toolkit';
type UserLogin = {
  username: string;
  password: string;
};

type UserRegister = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
};

export const login = async (dispatch: Dispatch<AnyAction>, user: UserLogin) => {
  dispatch(userStart());
  try {
    const res = await axios.post(`${url}/auth/login`, user, {
      withCredentials: true,
    });
    dispatch(userLoginSuccess(res.data));
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

export const register = async (dispatch: Dispatch<AnyAction>, user: UserRegister) => {
  dispatch(userStart());
  try {
    const res = await axios.post(`${url}/auth/register`, user, {
      withCredentials: true,
    });
    dispatch(userSuccess());
    res.data && window.location.replace('/login');
  } catch (err) {
    dispatch(userFail());
  }
};

export const logout = async (dispatch: Dispatch<AnyAction>) => {
  dispatch(userStart());
  try {
    const res = await axios.get(`${url}/auth/logout`, {
      withCredentials: true,
    });
    dispatch(userLogout());
    window.location.replace('/');
  } catch (err) {
    dispatch(userFail());
  }
};
