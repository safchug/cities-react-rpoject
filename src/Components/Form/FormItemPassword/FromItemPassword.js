import { Form, Input } from "antd";

const FormItemPassword = ({ name, label, value }) => (
  <Form.Item name={name} label={label} value={value}>
    <Input.Password />
  </Form.Item>
);

export default FormItemPassword;
