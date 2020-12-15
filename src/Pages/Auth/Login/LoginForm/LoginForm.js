import Form from "../../../../Components/Form/Wrapper/Form";
import FormItem from "../../../../Components/Form/FormItem/FormItem";
import validation from "./validation";
import FormItemPassword from "../../../../Components/Form/FormItemPassword/FromItemPassword";
import SubmitButton from "../../../../Components/Form/SubmitButton/Button";

const LoginForm = ({ submit }) => (
  <Form submit={submit}>
    <FormItem name="mail" label="Mail" rules={validation.mail} />
    <FormItemPassword
      name="password"
      label="Password"
      rules={validation.password}
    />
    <SubmitButton>Log in</SubmitButton>
  </Form>
);

export default LoginForm;
