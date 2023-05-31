import { Divider } from 'antd';

import { CartForm } from '../components/cart-form';
import { CartItems } from '../components/cart-items';

const CartPage = () => {
  return (
    <div className="cart-container">
      <CartForm />
      <Divider type="vertical" style={{ height: 'auto', margin: '0 24px' }} />
      <CartItems />
    </div>
  );
};

export default CartPage;
