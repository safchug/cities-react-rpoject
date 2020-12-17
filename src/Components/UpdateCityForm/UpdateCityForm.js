import Form from "../Form/Wrapper/Form";
import FormItem from "../Form/FormItem/FormItem";
import SubmitButton from "../Form/SubmitButton/Button";

const UpdateCityForm = ({ submit }) => (
  <Form submit={submit}>
    <FormItem name="location" label="Location" />
    <FormItem name="population" label="Population" />
    <FormItem name="area" label="Area" />
    <FormItem name="found" label="Found" />
    <SubmitButton>Update</SubmitButton>
  </Form>
);

export default UpdateCityForm;
