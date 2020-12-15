import Form from "../../../../Components/Form/Wrapper/Form";
import FormItem from "../../../../Components/Form/FormItem/FormItem";
import SubmitButton from "../../../../Components/Form/SubmitButton/Button";

const UpdateCityForm = ({ submit }) => (
  <Form submit={submit}>
    <FormItem name="location" label="Location" />
    <FormItem name="population" label="Population"/>
    <FormItem name="area" label="Area"/>
    <FormItem name="found" label="Found"/>
    <SubmitButton>Update</SubmitButton>
  </Form>
);

export default UpdateCityForm;
