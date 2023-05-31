import { Card, Form, InputNumber, Image } from 'antd';

import { ResponseProductsDto } from '../types/types';

const APP_URL = import.meta.env.VITE_APP_IMAGE_PATH;

const CartItem: React.FC<{ item: ResponseProductsDto }> = ({ item }) => {
  const onChange = (value: number | null) => {
    console.log('changed', value);
  };

  return (
    <Card
      style={{ flex: '1 1 auto' }}
      bodyStyle={{ display: 'flex', alignItems: 'center' }}
    >
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
