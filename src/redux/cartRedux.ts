import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductInterface } from 'types';

export interface CartState {
  products: ProductInterface[];
  quantity: number;
  total: number;
}

const initialState: CartState = {
  products: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<any>) => {
      state.quantity += 1;
      state.products.push(action.payload.product);
      state.total += action.payload.price;
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
