import { Alert as AntAlert } from "antd";

/*
types: success, error, warning, info
* */
const Alert = ({ status, message }) => {
  const type = status === "error" ? "error" : "info";

  return status !== "pending" ? (
    <AntAlert message={message} type={type} showIcon />
  ) : null;
};

export default Alert;
