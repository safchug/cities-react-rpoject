import { Row, Col, Form, Input, Button, Space } from "antd";

const Registration = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const submit = (e) => {
    console.log(e);
  };

  return (
    <div className="registraration">
      <Row justify="center" align="middle">
        <Col span="8">
          <Form onFinish={submit} {...layout}>
            <Form.Item
              name="name"
              label="Full name"
              rules={[
                {
                  required: true,
                  message: "Please input your full name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="birthday"
              label="Birthday"
              rules={[
                {
                  required: true,
                  message: "Please input you Birthday!",
                },
              ]}
            >
              <Input />
            </Form.Item>
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

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Row justify="end">
              <Button type="primary" htmlType="submit">
                Register
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Registration;
