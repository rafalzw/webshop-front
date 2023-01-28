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
      if (state.products.find((item) => item._id === action.payload._id)) {
        return;
      }
      state.products.push(action.payload);
      localStorage.setItem('favorites', JSON.stringify(state));
    },
    removeProduct: (state, action: PayloadAction<string | undefined>) => {
      const newState = { products: state.products.filter((item) => item._id !== action.payload) };
      localStorage.setItem('favorites', JSON.stringify(newState));
      return { ...newState };
    },
  },
});

export const { addProduct, loadFavorites, removeProduct } = favoritesSlice.actions;
export default favoritesSlice.reducer;
