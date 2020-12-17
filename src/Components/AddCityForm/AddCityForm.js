import Form from "../Form/Wrapper/Form";
import FormItem from "../Form/FormItem/FormItem";
import SubmitButton from "../Form/SubmitButton/Button";
import validation from "./validation";

const AddCityForm = ({ submit }) => (
  <Form submit={submit}>
    <FormItem name="name" label="Name" rules={validation.name} />
    <FormItem name="location" label="Location" rules={validation.location} />
    <FormItem
      name="population"
      label="Population"
      rules={validation.population}
    />
    <FormItem name="area" label="Area" rules={validation.area} />
    <FormItem name="found" label="Found" rules={validation.found} />
    <SubmitButton>Add</SubmitButton>
  </Form>
);

export default AddCityForm;
