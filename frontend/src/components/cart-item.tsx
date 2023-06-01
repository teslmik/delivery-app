import { DeleteOutlined } from '@ant-design/icons';
import { Card, Form, InputNumber, Image } from 'antd';
import { changeCoutn, removeFromCart } from '../redux/cart/slice';
import { useAppDispatch } from '../redux/store';

import { ResponseProductsDto } from '../types/types';

const APP_URL = import.meta.env.VITE_APP_IMAGE_PATH;

const CartItem: React.FC<{ item: ResponseProductsDto }> = ({ item }) => {
  const dispatch = useAppDispatch();

  const onChange = (value: number | null) => {
    dispatch(changeCoutn({ item, value }));
  };

  const removeHendler = () => {
    dispatch(removeFromCart(item._id));
  };

  return (
    <Card
      style={{ flex: '1 1 auto' }}
      bodyStyle={{ display: 'flex', alignItems: 'center' }}
    >
      <DeleteOutlined style={{ cursor: 'pointer' }} onClick={removeHendler} />
      <Card.Meta
        avatar={
          <Image
            preview={false}
            height={140}
            src={`${APP_URL}${item.imageUrl}`}
          />
        }
      />
      <div className="cart-card-body">
        <p>{item.name}</p>
        <p>Price: {item.price} ₴</p>
        <Form.Item>
          <InputNumber
            min={1}
            max={10}
            defaultValue={item.count}
            onChange={onChange}
          />
        </Form.Item>
      </div>
    </Card>
  );
};

export { CartItem };
