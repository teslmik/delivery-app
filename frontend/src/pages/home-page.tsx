import { Layout, theme, Space, Spin, Empty } from 'antd';
import { useSelector } from 'react-redux';

import { ProductCard, Sidebar } from '../components/components';
import { Status } from '../enums/data-status.enum';
import { RootState } from '../redux/store';

const HomePage = () => {
  const { products, status } = useSelector(
    (state: RootState) => state.products,
  );

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Sidebar colorBgContainer={colorBgContainer} />
      <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
        {status === Status.LOADING ? (
          <Spin className="spin-products" size="large" />
        ) : (
          <Space size={'large'} wrap>
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard product={product} key={product._id} />
              ))
            ) : (
              <Empty
                description="Products not found"
                className="empty-products"
              />
            )}
          </Space>
        )}
      </Layout.Content>
    </>
  );
};

export default HomePage;
