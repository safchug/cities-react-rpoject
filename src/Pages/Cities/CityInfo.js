import { useState } from "react";
import { Typography, Button } from "antd";
import UpdateCityFrom from "./UpdateCityForm";

const { Text } = Typography;

const CityInfo = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <p>
        <Text mark>Location</Text>USA
      </p>
      <Button type="primary" onClick={() => setShow(!show)}>
        Update
      </Button>
      <Button type="primary">Delete</Button>
      {show ? <UpdateCityFrom /> : null}
    </div>
  );
};

export default CityInfo;
