import { Button, Form, FormInstance } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../redux/cart/slice';
import { RootState, useAppDispatch } from '../redux/store';
import { fetchCreateOrder } from '../services/orders.service';
import { OrderRequestDto } from '../types/order-request-dto.type';

const FormSubmitButton = ({ form }: { form: FormInstance }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [submittable, setSubmittable] = useState(false);
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);

  const values = Form.useWatch([], form);

  const formSubmit = () => {
    const { name, ...rest } = values;
    const modifiedValues = { ...rest, userName: name };
    const formData: OrderRequestDto = {
      ...modifiedValues,
      totalPrice,
      products: [...items],
    };

    fetchCreateOrder(formData);
    navigate('/');
    dispatch(clearCart());
  };

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  return (
    <Button
      type="primary"
      htmlType="submit"
      disabled={!submittable || items.length === 0}
      onClick={formSubmit}
    >
      Submit order
    </Button>
  );
};

export { FormSubmitButton };
