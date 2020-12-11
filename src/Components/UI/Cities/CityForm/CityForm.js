import { Form } from "antd";

import NameItem from "./NameItem";
import LocationItem from "./LocationItem";
import PopulationItem from "./PopulationItem";
import AreaItem from "./AreaItem";
import FoundItem from "./FoundItem";
import CitiesButton from "./CitiesButton";

const CityForm = ({ submit, actionType, data }) => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  return (
    <Form onFinish={submit} {...layout}>
      <NameItem value={data ? data.name : null} />
      <LocationItem value={data ? data.location : null} />
      <PopulationItem value={data ? data.population : null} />
      <AreaItem value={data ? data.area : null} />
      <FoundItem value={data ? data.found : null} />
      <CitiesButton>{actionType}</CitiesButton>
    </Form>
  );
};

export default CityForm;
