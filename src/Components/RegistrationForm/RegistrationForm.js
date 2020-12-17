import Form from "../Form/Wrapper/Form";
import FormItem from "../Form/FormItem/FormItem";
import FormItemPassword from "../Form/FormItemPassword/FromItemPassword";
import SubmitButton from "../Form/SubmitButton/Button";
import validation from "./validation";
const RegistarationFrom = ({ submit }) => (
  <Form submit={submit}>
    <FormItem name="name" label="Name" rules={validation.name} />
    <FormItem name="birthday" label="Birthday" rules={validation.birthday} />
    <FormItem name="mail" label="Mail" rules={validation.mail} />
    <FormItemPassword
      name="password"
      label="Password"
      rules={validation.password}
    />
    <FormItemPassword
      name="confirm"
      label="Confirm Password"
      rules={validation.confirm}
    />
    <SubmitButton>Register</SubmitButton>
  </Form>
);

export default RegistarationFrom;
