import { Layout, theme, Space } from 'antd';
import { useSelector } from 'react-redux';

import { ProductCard, Sidebar } from '../components/components';
import { RootState } from '../redux/store';

const HomePage = () => {
  const { products } = useSelector((state: RootState) => state.products);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Sidebar colorBgContainer={colorBgContainer} />
      <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Space size={'large'} wrap>
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </Space>
      </Layout.Content>
    </>
  );
};

export default HomePage;
