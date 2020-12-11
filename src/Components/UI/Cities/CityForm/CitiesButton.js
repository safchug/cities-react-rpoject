import { Button, Form, Row } from "antd";

const CitiesButton = ({ children }) => (
  <Row justify="end">
    <Button type="primary" htmlType="submit">
      {children}
    </Button>
  </Row>
);

export default CitiesButton;
