import { Table } from 'antd';

import { ResponseProductsDto } from '../types/types';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price, ₴',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Count, pcs.',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'Total price, ₴',
    dataIndex: 'total',
    key: 'total',
  }
];

const OrderProductsTable: React.FC<{ products: ResponseProductsDto[] }> = ({
  products,
}) => {
  const dataSource = products.map((product) => ({
    name: product.name,
    price: product.price,
    count: product.count,
    total: product.count * product.price,
    key: product._id,
  }));

  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};

export { OrderProductsTable };
