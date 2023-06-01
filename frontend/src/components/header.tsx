import { Badge, Button, Divider } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../redux/store';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { items } = useSelector((state: RootState) => state.cart);

  const coutnSumm = items.reduce((summ, item) => summ + Number(item.count), 0);

  const handleLink = (url = '') => {
    navigate(url);
  };

  return (
    <div className="header-btn">
      <Button type="text" onClick={() => handleLink()}>
        Shop
      </Button>
      <Divider type="vertical" />
      <Badge size="small" count={coutnSumm}>
        <Button type="text" onClick={() => handleLink('cart')}>
          Shoping Cart
        </Button>
      </Badge>
      <Divider type="vertical" />
      <Button type="text" onClick={() => handleLink('history')}>
        History
      </Button>
    </div>
  );
};

export { Header };
