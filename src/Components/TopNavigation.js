import { Layout, Menu } from "antd";
const { Header } = Layout;

const TopNavigation = () => (
  <Layout className="layout">
    <Header>
      <Menu className="mune_right" mode="horizontal" theme="dark">
        <Menu.Item key="login">Log in</Menu.Item>
        <Menu.Item key="signin">Sign in</Menu.Item>
      </Menu>
    </Header>
  </Layout>
);

export default TopNavigation;
