import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppRoutes from './routes';
import GlobalStyles from './styles/global';
import Header from './components/Header';
import { CartProvider } from './hooks/useCart';

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <CartProvider>
        <GlobalStyles />
        <Header />
        <AppRoutes />
        <ToastContainer autoClose={3000} />
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;