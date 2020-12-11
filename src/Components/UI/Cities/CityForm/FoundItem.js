import { Form, Input } from "antd";

const FoundItem = ({ value }) => (
  <Form.Item
    name="found"
    label="Found"
    rules={[
      {
        required: true,
        message: "Found is required!",
      },
    ]}
  >
    <Input defaultValue={value} />
  </Form.Item>
);

export default FoundItem;
