import { Fragment, useContext, useEffect, useState } from "react";
import { Col, Card, Row, Typography, Button } from "antd";
import { observer } from "mobx-react-lite";
import StoreContext from "../../../store/StoreContext";
import { useHistory } from "react-router-dom";
import Loader from "../../../Components/UI/Loader/Loader";

import "./style.css";

const CitiesList = observer(() => {
  const { Text } = Typography;

  const { cities } = useContext(StoreContext);
  let history = useHistory();

  useEffect(() => {
    console.log("effect");
    cities.fetchCitiesList();
  }, []);

  const showInfo = (id) => {
    history.push(`/city_info/${id}`);
  };

  return (
    <Row gutter={[16, 16]}>
      {cities.loading ? (
        <Loader />
      ) : (
        cities.citiesList &&
        cities.citiesList.map((city) => (
          <Col span={8} className="gutter-row">
            <Card
              title={city.name}
              className="city_card"
              extra={
                <Button type="primary" onClick={showInfo.bind(null, city.id)}>
                  {" "}
                  More
                </Button>
              }
            >
              <Text mark>Population</Text>
              {city.population}
            </Card>
          </Col>
        ))
      )}
    </Row>
  );
});

export default CitiesList;
