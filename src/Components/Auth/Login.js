import { Button, Col, Form, Input, Row } from "antd";

const Login = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const submit = (e) => {};

  return (
    <div className="login">
      <Row justify="center" align="middle">
        <Col span="8">
          <Form onFinish={submit} {...layout}>
            <Form.Item
              name="email"
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
        </Col>
      </Row>
    </div>
  );
};

export default Login;
