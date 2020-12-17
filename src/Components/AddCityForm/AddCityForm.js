import Form from "../Form/Wrapper/Form";
import FormItem from "../Form/FormItem/FormItem";
import SubmitButton from "../Form/SubmitButton/Button";

const AddCityForm = ({ submit }) => (
  <Form submit={submit}>
    <FormItem name="name" label="Name" />
    <FormItem name="location" label="Location" />
    <FormItem name="population" label="Population" />
    <FormItem name="area" label="Area" />
    <FormItem name="found" label="Found" />
    <SubmitButton>Add</SubmitButton>
  </Form>
);

export default AddCityForm;
