import { Space, Typography } from 'antd';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import { CartItem } from './components';

const CartItems: React.FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  return (
    <div className="cart-content">
      <div className="cart-wrapper">
        <Space className="cart-items" direction="vertical">
          {items.map(item => (
            <CartItem key={item._id} item={item} />
          ))}
        </Space>
      </div>
      <Typography.Title level={3} className="cart-total">
        Total price: {totalPrice.toLocaleString()} ₴
      </Typography.Title>
    </div>
  );
};

export { CartItems };
