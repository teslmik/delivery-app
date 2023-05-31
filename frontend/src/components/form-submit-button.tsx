import { Button, Form, FormInstance } from 'antd';
import { useEffect, useState } from 'react'

const FormSubmitButton = ({ form }: { form: FormInstance }) => {
  const [submittable, setSubmittable] = useState(false);

  // Watch all values
  const values = Form.useWatch([], form);

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
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
}

export { FormSubmitButton };
