import { Alert as AntAlert } from "antd";

/*
types: success, error, warning, info
* */
const Alert = ({ type = "info", message }) => (
  <Alert message={message} type={type} showIcon />
);

export default Alert;
