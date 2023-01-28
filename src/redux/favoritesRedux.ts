import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductInFavorites = {
  _id: string | undefined;
  title: string;
  img: string;
  price: number;
  addDate?: string;
};

export interface FavoritesState {
  products: ProductInFavorites[];
}

const initialState: FavoritesState = {
  products: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductInFavorites>) => {
      state.products.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  },
});

export const { addProduct } = favoritesSlice.actions;
export default favoritesSlice.reducer;
