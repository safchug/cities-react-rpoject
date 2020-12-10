import { Fragment, useContext, useEffect } from "react";
import { Typography, Space, Button, Row, Col, Card } from "antd";
import { observer } from "mobx-react-lite";

import StoreContext from "../../store/StoreContext";
import { useParams } from "react-router-dom";

const { Text } = Typography;

const CityInfo = observer(() => {
  const { cities } = useContext(StoreContext);

  const { id } = useParams();
  const { city } = cities;

  useEffect(() => {
    cities.fetchCityById(id);
  }, []);

  return (
    <div>
      {city ? (
        <Row justify="center">
          <Card title={city.name} className="city_info_card">
            <Col span={18}>
              <Text mark>Location</Text>
              {city.location}
            </Col>

            <Col span={18}>
              <Text mark>Population</Text>
              {city.population}
            </Col>
            <Col span={18}>
              <Text mark>Area</Text>
              {city.area}
            </Col>
            <Col span={8}>
              <Text mark>Found</Text>
              {city.found}
            </Col>
            <Col span={8}>
              <Text mark>Created by:</Text>
            </Col>
            <Col span={8}>
              <Text mark>Name:</Text>
              {city.user.name}
            </Col>
            <Col span={8}>
              <Text mark>Mail</Text> {city.user.mail}
            </Col>

            <Button type="primary">Update</Button>
            <Button type="primary">Delete</Button>
          </Card>
        </Row>
      ) : null}
    </div>
  );
});

export default CityInfo;
