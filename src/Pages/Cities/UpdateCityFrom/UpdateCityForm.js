import { Button, Col, Form, Input, Row } from "antd";

import "./style.css";

const UpdateCityFrom = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const submit = (e) => {
    console.log(e);
  };

  return (
    <div className="update_city_from">
      <Row justify="center">
        <Col span={12}>
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
        </Col>
      </Row>
    </div>
  );
};

export default UpdateCityFrom;
