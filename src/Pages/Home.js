import { Row, Col } from "antd";
import CitiesList from "./Cities/CitiesList";
import Search from "./Cities/Search";

const Home = () => {
  return (
    <Row justify="center">
      <Col span={12}>
        <Search />
      </Col>
      <Col span={20}>
        <CitiesList />
      </Col>
    </Row>
  );
};

export default Home;
