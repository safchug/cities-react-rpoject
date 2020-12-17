import { useState } from "react";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";

import CitiesList from "../Components/CitiesList/CitiesList";
import Search from "../Components/Search/Search";

const Home = () => {
  const history = useHistory();

  const [query, setQuery] = useState("");

  const onQuerySubmit = (e) => {
    setQuery(e.search);
  };

  const openAddCityFrom = () => {
    history.push("/add_form");
  };

  return (
    <Row justify="center">
      <Col span={12}>
        <Search onQuerySubmit={onQuerySubmit} />
      </Col>
      <Col span={20}>
        <Button onClick={openAddCityFrom}>Add city</Button>
      </Col>
      <Col span={20}>
        <CitiesList query={query} />
      </Col>
    </Row>
  );
};

export default Home;
