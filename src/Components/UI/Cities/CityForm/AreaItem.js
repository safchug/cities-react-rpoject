import { Form, Input } from "antd";

const AreaItem = ({ value }) => (
  <Form.Item
    name="area"
    label="Area"
    rules={[
      {
        required: true,
        message: "Area is required!",
      },
    ]}
  >
    <Input defaultValue={value} />
  </Form.Item>
);

export default AreaItem;
