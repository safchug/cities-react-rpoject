import Form from "../../../../Components/Form/Wrapper/Form";
import FormItem from "../../../../Components/Form/FormItem/FormItem";
import SubmitButton from "../../../../Components/Form/SubmitButton/Button";

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
