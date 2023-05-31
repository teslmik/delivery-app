import { Button, Form, Input, Space } from "antd";

import { FormSubmitButton } from "./components";

const CartForm: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      name="validateOnly"
      layout="vertical"
      autoComplete="off"
      className="cart-form"
    >
      <div className="inputs-wrapper">
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="email" label="Email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="phone" label="Phone" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
      </div>
      <Form.Item>
        <Space>
          <FormSubmitButton form={form} />
          <Button htmlType="reset">Reset</Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export { CartForm };
