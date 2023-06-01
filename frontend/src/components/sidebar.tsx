import { Layout, Menu, MenuProps, Typography } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { fetchProducts } from '../redux/products/actions';
import { fetchShops } from '../redux/shops/actions';
import { RootState, useAppDispatch } from '../redux/store';

const Sidebar: React.FC<{ colorBgContainer: string }> = ({
  colorBgContainer,
}) => {
  const dispatch = useAppDispatch();
  const { shops } = useSelector((state: RootState) => state.shops);
  const { items: cart } = useSelector((state: RootState) => state.cart);

  const itemsArr = shops.map((shop) => shop.name);
  const items: MenuProps['items'] = itemsArr.map((name, index) => {
    const isDisabled =
      cart.length > 0 && cart.every((item) => item.shopId !== shops[index]._id);

    return {
      key: String(index + 1),
      label: name,
      disabled: isDisabled,
    };
  });

  const menuItemsHandler: MenuProps['onClick'] = (event) => {
    dispatch(fetchProducts({ shopId: shops[+event.key - 1]._id }));
  };

  useEffect(() => {
    dispatch(fetchShops())
      .unwrap()
      .then((res) => dispatch(fetchProducts({ shopId: res[0]._id })));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout.Sider
      style={{ background: colorBgContainer }}
      width={200}
      title="Shops"
    >
      <Typography.Title level={5} className="menu-title">
        Shops
      </Typography.Title>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', padding: '0 12px' }}
        items={items}
        onClick={menuItemsHandler}
      />
    </Layout.Sider>
  );
};

export { Sidebar };
