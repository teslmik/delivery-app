import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';

import { fetchSearchOrders } from '../redux/orders/actions';
import { useAppDispatch } from '../redux/store';

const HistoryForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const [submittable, setSubmittable] = useState(false);
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  const onFinish = (values: { email: string; phone: string }) => {
    const { email, phone } = values;
    const encodedPhone = encodeURIComponent(phone);
    dispatch(fetchSearchOrders({ email, phone: encodedPhone }));
    form.resetFields();
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
    <Form
      form={form}
      className="history-form"
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: 'Please input your phone!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" disabled={!submittable}>
          Search orders
        </Button>
      </Form.Item>
    </Form>
  );
};

export { HistoryForm };
