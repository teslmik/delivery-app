import { Collapse, Divider, Empty, Space } from 'antd';
import { useSelector } from 'react-redux';

import {
  CollapseHeader,
  HistoryForm,
  OrderProductsTable,
} from '../components/components';
import { RootState } from '../redux/store';

const HistoryPage = () => {
  const { orders } = useSelector((state: RootState) => state.orders);

  return (
    <div className="history-container">
      <HistoryForm />
      <Divider />
      <div
        className="cart-content"
        style={{ width: '100%', height: 'calc(100vh - 385px)' }}
      >
        <div className="cart-wrapper">
          <Space className="cart-items" direction="vertical">
            {orders.length > 0 ? (
              <Collapse defaultActiveKey={[orders.length]}>
                {orders.map((order, index) => (
                  <Collapse.Panel
                    header={
                      <CollapseHeader
                        total={orders.length}
                        index={index}
                        order={order}
                      />
                    }
                    key={index + 1}
                  >
                    <OrderProductsTable products={order.products} />
                  </Collapse.Panel>
                )).reverse()}
              </Collapse>
            ) : (
              <Empty description='Orders not found' />
            )}
          </Space>
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
