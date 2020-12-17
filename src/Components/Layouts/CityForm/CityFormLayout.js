import { Row } from "antd";

const CityFormLayout = ({ children, className }) => (
  <div className={className}>
    <Row justify="center">{children}</Row>
  </div>
);

export default CityFormLayout;
