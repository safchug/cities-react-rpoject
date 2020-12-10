import { Button, Form, Input, Row } from "antd";

const UpdateCityFrom = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const submit = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Form onFinish={submit} {...layout}>
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
          <Input />
        </Form.Item>
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
          <Input />
        </Form.Item>
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
          <Input />
        </Form.Item>
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
          <Input />
        </Form.Item>
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
          <Input />
        </Form.Item>
        <Row justify="end">
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default UpdateCityFrom;
