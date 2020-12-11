import { Fragment, useContext, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Typography, Space, Button, Row, Col, Card } from "antd";
import { when } from "mobx";
import { observer } from "mobx-react-lite";

import StoreContext from "../../../store/StoreContext";

import "./style.css";

const { Text } = Typography;

const CityInfo = observer(() => {
  const { cities, auth } = useContext(StoreContext);

  const { id } = useParams();
  const history = useHistory();
  const { city } = cities;

  useEffect(() => {
    cities.fetchCityById(id);
  }, []);

  const goHome = () => {
    history.push("/");
  };

  const goToUpdateFrom = () => {
    history.push("/update_from");
  };

  const deleteCity = () => {
    cities.deleteCity(id);
  };

  when(
    () => cities.deleteCitySuccess,
    () => {
      history.push("/");
      cities.clearDeletingState();
    }
  );

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
              <Text mark>Population </Text>
              {city.population}
            </Col>
            <Col span={18}>
              <Text mark>Area </Text>
              {city.area}
            </Col>
            <Col span={8}>
              <Text mark>Found </Text>
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

            {auth.user && city.userId === auth.user.id && (
              <Fragment>
                <Button type="primary" onClick={goToUpdateFrom}>
                  Update
                </Button>
                <Button type="primary" onClick={deleteCity}>
                  Delete
                </Button>
              </Fragment>
            )}
            <Button type="primary" onClick={goHome}>
              Home
            </Button>
          </Card>
        </Row>
      ) : null}
    </div>
  );
});

export default CityInfo;
