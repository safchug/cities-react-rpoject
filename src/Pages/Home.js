import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";

import CitiesList from "./Cities/CitiesList/CitiesList";
import Search from "./Cities/Search/Search";

const Home = () => {
  const history = useHistory();

  const openAddCityFrom = () => {
    history.push("/add_form");
  };

  return (
    <Row justify="center">
      <Col span={12}>
        <Search />
      </Col>
      <Col span={20}>
        <Button onClick={openAddCityFrom}>Add city</Button>
      </Col>
      <Col span={20}>
        <CitiesList />
      </Col>
    </Row>
  );
};

export default Home;
