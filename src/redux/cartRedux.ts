import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ProductInCart = {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string;
  color: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
  quantity: number;
};

export interface CartState {
  products: ProductInCart[];
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
    loadCart: (state) => {
      const saved = localStorage.getItem('cart');
      let savedCart;
      if (saved) {
        savedCart = JSON.parse(saved);
        return { ...state, ...savedCart };
      }
    },
    addProduct: (state, action: PayloadAction<ProductInCart>) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem('cart', JSON.stringify(state));
    },

    incQuantity: (state, action: PayloadAction<string>) => {
      const id = state.products.findIndex((el) => el._id === action.payload);
      state.products[id].quantity += 1;
      state.total += state.products[id].price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
    decQuantity: (state, action: PayloadAction<string>) => {
      const id = state.products.findIndex((el) => el._id === action.payload);

      if (state.products[id].quantity <= 1) {
        state.total -= state.products[id].price;
        state.products.splice(id, 1);
        state.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(state));
        return;
      }
      state.products[id].quantity -= 1;
      state.total -= state.products[id].price;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addProduct, incQuantity, decQuantity, loadCart } = cartSlice.actions;
export default cartSlice.reducer;
