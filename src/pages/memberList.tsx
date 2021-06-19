import { Layout, Menu, Breadcrumb, Input, DatePicker } from "antd";
import {
  GitlabOutlined,
  UserOutlined,
  LineChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const { Search } = Input;

const memberList: React.FC = () => {
  const onSearch = (value: string) => {
    console.log(value);
  };

  return (
    <Layout
      className="min-h-screen"
      style={{ height: "100%", borderRight: 0, background: "#F0F0F0" }}
    >
      <Sider>
        <Menu
          mode="inline"
          defaultOpenKeys={["sub4"]}
          style={{ height: "100%", borderRight: 0, background: "#F0F0F0" }}
        >
          <Menu.Item
            key="sub1"
            icon={<GitlabOutlined style={{ fontSize: "125%" }} />}
            style={{ fontSize: "24px", color: "#001529" }}
          >
            Logo
          </Menu.Item>
          <Menu.Item
            key="sub2"
            icon={<LineChartOutlined style={{ fontSize: "125%" }} />}
            style={{ fontSize: "16px", color: "#001529" }}
          >
            Dashboard
          </Menu.Item>
          <SubMenu
            key="sub3"
            icon={<UserOutlined style={{ fontSize: "125%" }} />}
            title="Staff"
            style={{ fontSize: "16px", color: "#001529" }}
          >
            <Menu.Item key="1">Staff management</Menu.Item>
            <Menu.Item key="2">Role management</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            icon={<TeamOutlined style={{ fontSize: "125%" }} />}
            title="Member"
            style={{ fontSize: "16px", color: "#001529" }}
          >
            <Menu.Item key="3">Member management</Menu.Item>
            <Menu.Item key="4">Group management</Menu.Item>
            <Menu.Item key="5">Tags management</Menu.Item>
            <Menu.Item key="6">Member info</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout style={{ background: "white" }}>
        <Menu
          mode="horizontal"
          style={{ background: "#F0F0F0", fontSize: "16px", color: "#001529" }}
        >
          <Menu.Item key="1">Customer Service</Menu.Item>
          <Menu.Item key="2">Marketing</Menu.Item>
        </Menu>
        <Breadcrumb
          style={{ margin: "16px 0", padding: "0 24px 2px" }}
          separator=">"
        >
          <Breadcrumb.Item>Member</Breadcrumb.Item>
          <Breadcrumb.Item>Member management</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          style={{
            padding: "0 8px 2px",
          }}
        >
          <Layout style={{ background: "#F0F0F0", padding: "10px 10px 10px" }}>
            <div className="md:flex">
              <Search
                placeholder="Search"
                allowClear
                onSearch={onSearch}
                style={{
                  width: "70%",
                }}
              />
              <DatePicker.RangePicker
                style={{
                  width: "30%",
                }}
              />
            </div>
          </Layout>
        </Content>
      </Layout>
    </Layout>
  );
};

export default memberList;
