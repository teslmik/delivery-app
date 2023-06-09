import React from 'react';
import { OrderResponseDto } from '../types/order-response-dto.type';

type Propertiws = {
  order: OrderResponseDto;
  index: number;
};

const CollapseHeader: React.FC<Propertiws> = ({ order, index }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      <div>
        {`Order #${index + 1} | ${new Date(order.createdAt)
          .toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          })
          .replace(',', '')}`}
      </div>
      <div>{order.address}</div>
      <b>{`Total price: ${order.totalPrice} ₴`}</b>
    </div>
  );
};

export { CollapseHeader };
