import { Form as AntForm } from "antd";

const Form = ({ submit, children }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <AntForm {...layout} onFinish={submit}>
      {children}
    </AntForm>
  );
};

export default Form;
