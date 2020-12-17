import { Form, Input, Button, Row, Col } from "antd";
import { Fragment } from "react";
import { SearchOutlined } from "@ant-design/icons";

import "./style.css";

const Search = ({ onQuerySubmit }) => {
  return (
    <Fragment>
      <Form className="search" onFinish={onQuerySubmit}>
        <Row gutter={[16, 16]}>
          <Col span={22}>
            <Form.Item name="search">
              <Input placeholder="Searching" />
            </Form.Item>
          </Col>
          <Col span={2}>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              htmlType="submit"
            ></Button>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default Search;
