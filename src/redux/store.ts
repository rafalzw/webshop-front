import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import userReducer from './userRedux';
import favoritesReducer from './favoritesRedux';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
