import { Alert } from "antd";

/*
types: success, error, warning, info
* */
const CustomAlert = ({ type = "info", message }) => (
  <Alert message={message} type={type} showIcon />
);

export default CustomAlert;
