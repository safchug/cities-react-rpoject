import { Button, Form, Input, Row } from "antd";

const LoginFrom = ({ submit }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Form onFinish={submit} {...layout}>
      <Form.Item
        name="mail"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Row>
    </Form>
  );
};

export default LoginFrom;
