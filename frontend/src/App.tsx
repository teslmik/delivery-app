import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts/main-layout';
import HomePage from './pages/home-page';
import CartPage from './pages/cart-page';

import './App.scss';
import 'antd/dist/reset.css';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default App;