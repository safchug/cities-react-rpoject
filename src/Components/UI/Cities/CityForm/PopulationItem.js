import { Form, Input } from "antd";

const PopulationItem = ({ value }) => (
  <Form.Item
    name="population"
    label="Population"
    rules={[
      {
        required: true,
        message: "Population is required!",
      },
    ]}
  >
    <Input defaultValue={value} />
  </Form.Item>
);

export default PopulationItem;
