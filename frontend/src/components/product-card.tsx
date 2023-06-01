import { Button, Card, Col, Divider } from 'antd';

import { addToCart } from '../redux/cart/slice';
import { useAppDispatch } from '../redux/store';
import { ResponseProductsDto } from '../types/types';

type Properties = {
  product: ResponseProductsDto;
};

const APP_URL = import.meta.env.VITE_APP_IMAGE_PATH;

const ProductCard: React.FC<Properties> = ({ product }) => {
  const dispatch = useAppDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(product));
  };

  return (
    <Col span={8}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src={`${APP_URL}${product.imageUrl}`} />}
      >
        <Card.Meta title={product.name} description={`${product.price} ₴`} />
        <Divider />
        <Button type="primary" block onClick={addToCartHandler}>
          Add to cart
        </Button>
      </Card>
    </Col>
  );
};

export { ProductCard };
