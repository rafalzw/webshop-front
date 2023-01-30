import React from 'react';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Cart } from './pages/Cart';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import { UserAccount } from './pages/UserAccount';
import { Favorites } from './pages/Favorites';

function App() {
  const { user } = useSelector((state: RootState) => state.user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={user ? <Navigate replace to='/' /> : <Register />} />
        <Route path='/login' element={user ? <Navigate replace to='/' /> : <Login />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:category' element={<ProductList />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/account' element={user ? <UserAccount /> : <Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
