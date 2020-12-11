import { Form, Input, Button, Row, Col } from "antd";
import { Fragment } from "react";
import { SearchOutlined } from "@ant-design/icons";

import "./style.css";

const Search = () => {
  return (
    <Fragment>
      <Form className="search">
        <Row gutter={[16, 16]}>
          <Col span={22}>
            <Form.Item>
              <Input placeholder="Searching" />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Button type="primary" icon={<SearchOutlined />}></Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default Search;
