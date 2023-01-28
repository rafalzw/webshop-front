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
    loadFavorites: (state) => {
      const saved = localStorage.getItem('favorites');
      let savedFavorites;
      if (saved) {
        savedFavorites = JSON.parse(saved);
        return { ...state, ...savedFavorites };
      }
    },
    addProduct: (state, action: PayloadAction<ProductInFavorites>) => {
      state.products.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
  },
});

export const { addProduct, loadFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
