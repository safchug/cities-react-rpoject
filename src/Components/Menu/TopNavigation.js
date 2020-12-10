import { observer } from "mobx-react-lite";
import { Layout, Menu } from "antd";

import CustomMenu from "./CustomMenu";

const { Header } = Layout;

const TopNavigation = () => {
  return (
    <Layout className="layout">
      <Header>
        <CustomMenu />
      </Header>
    </Layout>
  );
};

export default TopNavigation;
