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

export interface ProductQuantity {
  id: string;
  size: string;
  color: string;
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
      const index = state.products.findIndex(
        (product) =>
          product._id === action.payload._id &&
          product.size === action.payload.size &&
          product.color === action.payload.color,
      );
      if (index !== -1) {
        state.products[index].quantity += action.payload.quantity;
        state.total += state.products[index].price * action.payload.quantity;
        localStorage.setItem('cart', JSON.stringify(state));
        return;
      }

      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
      localStorage.setItem('cart', JSON.stringify(state));
    },

    incQuantity: (state, action: PayloadAction<ProductQuantity>) => {
      const index = state.products.findIndex(
        (product) =>
          product._id === action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color,
      );
      state.products[index].quantity += 1;
      state.total += state.products[index].price;
      localStorage.setItem('cart', JSON.stringify(state));
    },

    decQuantity: (state, action: PayloadAction<ProductQuantity>) => {
      const index = state.products.findIndex(
        (product) =>
          action.payload.id &&
          product.size === action.payload.size &&
          product.color === action.payload.color,
      );

      if (state.products[index].quantity <= 1) {
        state.total -= state.products[index].price;
        state.products.splice(index, 1);
        state.quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(state));
        return;
      }
      state.products[index].quantity -= 1;
      state.total -= state.products[index].price;
      localStorage.setItem('cart', JSON.stringify(state));
    },

    removeCart: () => {
      localStorage.removeItem('cart');
      return initialState;
    },
  },
});

export const { addProduct, incQuantity, decQuantity, loadCart, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
