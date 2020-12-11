import { Form, Input } from "antd";

const NameItem = ({ value }) => (
  <Form.Item
    name="name"
    label="Name"
    rules={[
      {
        required: true,
        message: "Name is required!",
      },
    ]}
  >
    <Input defaultValue={value} />
  </Form.Item>
);

export default NameItem;
