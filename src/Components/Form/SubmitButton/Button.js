import { Button, Row } from "antd";

const SubmitButton = ({ children }) => (
  <Row justify="end">
    <Button type="primary" htmlType="submit">
      {children}
    </Button>
  </Row>
);

export default SubmitButton;
