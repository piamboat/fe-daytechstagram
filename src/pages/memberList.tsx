import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LineChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const memberList: React.FC = () => {
  return (
    <Layout>
      <Header
        className="header"
        style={{ height: "100%", borderRight: 0, background: "#F0F0F0" }}
      >
        <div className="logo" />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ height: "100%", borderRight: 0, background: "#F0F0F0" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
        </Menu>
      </Header>
      <Layout className="min-h-screen">
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultOpenKeys={["sub2"]}
            style={{ height: "100%", borderRight: 0, background: "#F0F0F0" }}
          >
            <Menu.Item key="1" icon={<LineChartOutlined />}>
              Dashboard
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Staff">
              <Menu.Item key="1">Staff management</Menu.Item>
              <Menu.Item key="2">Role management</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Member">
              <Menu.Item key="3">Member management</Menu.Item>
              <Menu.Item key="4">Group management</Menu.Item>
              <Menu.Item key="5">Tags management</Menu.Item>
              <Menu.Item key="6">Member info</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ background: "white", padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }} separator=">">
            <Breadcrumb.Item>Member</Breadcrumb.Item>
            <Breadcrumb.Item>Member management</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default memberList;
