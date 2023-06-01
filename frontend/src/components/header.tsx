import { Button, Divider } from 'antd';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLink = (url = '') => {
    navigate(url);
  };

  return (
    <div className="header-btn">
      <Button type="text" onClick={() => handleLink()}>
        Shop
      </Button>
      <Divider type="vertical" />
      <Button type="text" onClick={() => handleLink('cart')}>
        Shoping Cart
      </Button>
      <Divider type="vertical" />
      <Button type="text" onClick={() => handleLink('history')}>
        History
      </Button>
    </div>
  );
};

export { Header };
