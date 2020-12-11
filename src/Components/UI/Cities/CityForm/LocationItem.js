import { Form, Input } from "antd";

const LocationItem = ({ value }) => (
  <Form.Item
    name="location"
    label="Location"
    rules={[
      {
        required: true,
        message: "Location is required!",
      },
    ]}
  >
    <Input defaultValue={value} />
  </Form.Item>
);

export default LocationItem;
