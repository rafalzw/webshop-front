import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductInFavorites = {
  _id: string;
  title: string;
  img: string;
  price: number;
};

export interface FavoritesState {
  products: ProductInFavorites[];
  date: Date | null;
}

const initialState: FavoritesState = {
  products: [],
  date: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductInFavorites>) => {
      state.products.push(action.payload);
      state.date = new Date();
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  },
});

export const { addProduct } = favoritesSlice.actions;
export default favoritesSlice.reducer;
