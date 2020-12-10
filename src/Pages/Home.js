import { Row, Col } from "antd";
import CitiesList from "./Cities/CitiesList";
import Search from "./Cities/Search";

const Home = () => {
  return (
    <Row justify="center">
      <Col span={12}>
        <Search />
        <CitiesList />
      </Col>
    </Row>
  );
};

export default Home;
