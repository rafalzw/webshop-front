import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useEffect } from 'react';
import axios from 'axios';
import { url } from '../../config/config';
import { checkLogin } from '../../redux/apiCalls';

export const UserData = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const userId = user?._id;

  useEffect(() => {
    (async () => {
      await checkLogin(dispatch);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${url}/users/${userId}`, {
          withCredentials: true,
        });
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <p>Dane</p>;
};
