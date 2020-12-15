import { Button as AntButton } from "antd";

const Button = ({ children, onClick }) => (
  <AntButton onClick={onClick}>{children}</AntButton>
);

export default Button;
