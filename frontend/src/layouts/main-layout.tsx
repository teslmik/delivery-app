import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../components/components'

const MainLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="main-layout">
      <Layout.Content style={{ padding: '0 50px' }}>
        <Header />
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer }}
          className="content-layout"
        >
          <Outlet />
        </Layout>
      </Layout.Content>
      <Footer />
    </Layout>
  );
};

export { MainLayout };
