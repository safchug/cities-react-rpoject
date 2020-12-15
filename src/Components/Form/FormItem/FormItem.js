import { Form, Input } from "antd";

const FormItem = ({ name, label, value}) => (
  <Form.Item
    name={name}
    label={label}
    value={value}
  >
    <Input />
  </Form.Item>
);

export default FormItem;
