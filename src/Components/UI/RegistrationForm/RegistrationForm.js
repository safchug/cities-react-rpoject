import { useState } from "react";
import { Button, Col, Form, Input, Row } from "antd";
import PropTypes from "prop-types";
import validation from "./validation";
import CustomAlert from "../CustomAlert";

const RegistrationFrom = ({ submit, error }) => {
  const [fullName, setFullName] = useState("");
  const [mail, setMail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const changeName = (e) => {
    setFullName(e.target.value);
  };

  const changeMail = (e) => {
    setMail(e.target.value);
  };

  const changeBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  const changeConfirm = (e) => {
    setConfirm(e.target.value);
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const processError = () => {
    let responseMsg = "Something went wrong";

    if (error.response) {
      responseMsg = error.response.data.message;
    }

    return <CustomAlert type="error" message={responseMsg} />;
  };

  return (
    <Form onFinish={submit} {...layout}>
      {error && processError()}

      <Form.Item name="name" label="Full name" rules={validation.name}>
        <Input value={fullName} onChange={changeName} />
      </Form.Item>
      <Form.Item name="birthday" label="Birthday" rules={validation.birthday}>
        <Input value={birthday} onChange={changeBirthday} />
      </Form.Item>
      <Form.Item name="mail" label="E-mail" rules={validation.mail}>
        <Input value={mail} onChange={changeMail} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={validation.password}
        hasFeedback
      >
        <Input.Password value={password} onChange={changePassword} />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={validation.confirm}
      >
        <Input.Password value={confirm} onChange={changeConfirm} />
      </Form.Item>

      <Row justify="end">
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Row>
    </Form>
  );
};

RegistrationFrom.propTypes = {
  submit: PropTypes.func.isRequired,
  error: PropTypes.object,
};

export default RegistrationFrom;
