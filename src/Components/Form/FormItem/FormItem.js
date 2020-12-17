import { Form, Input } from "antd";

const FormItem = ({ name, label, value, rules }) => (
  <Form.Item name={name} label={label} value={value} rules={rules}>
    <Input />
  </Form.Item>
);

export default FormItem;
