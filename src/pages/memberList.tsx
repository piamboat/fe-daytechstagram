import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  DatePicker,
  Table,
  Tooltip,
  Button,
  Avatar,
  PageHeader,
  Dropdown,
} from "antd";
import {
  GitlabOutlined,
  UserOutlined,
  LineChartOutlined,
  TeamOutlined,
  SearchOutlined,
  BellOutlined,
  EllipsisOutlined,
  FilterFilled,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;
const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#BFBFBF",
    }}
  />
);

// FixMe
const columns = [
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    ellipsis: {
      showTitle: false,
    },
    render: (status: string) => (
      <Tooltip placement="topLeft" title={status}>
        {status}
      </Tooltip>
    ),
    width: 80,
  },
  {
    title: "User",
    dataIndex: "user",
    key: "user",
    ellipsis: {
      showTitle: false,
    },
    render: (user: string) => (
      <Tooltip placement="topLeft" title={user}>
        {user}
      </Tooltip>
    ),
    width: 150,
  },
  {
    title: "Group",
    dataIndex: "group",
    key: "group",
    ellipsis: {
      showTitle: false,
    },
    render: (group: string) => (
      <Tooltip placement="topLeft" title={group}>
        {group}
      </Tooltip>
    ),
    width: 80,
  },
  {
    title: "RegisterDate",
    dataIndex: "registerDate",
    key: "registerDate",
    ellipsis: {
      showTitle: false,
    },
    render: (registerDate: string) => (
      <Tooltip placement="topLeft" title={registerDate}>
        {registerDate}
      </Tooltip>
    ),
    width: 120,
  },
  {
    title: "FirstDeposit",
    dataIndex: "firstDeposit",
    key: "firstDeposit",
    ellipsis: {
      showTitle: false,
    },
    render: (firstDeopsit: string) => (
      <Tooltip placement="topLeft" title={firstDeopsit}>
        {firstDeopsit}
      </Tooltip>
    ),
    width: 120,
  },
];

// FixMe
const data = [
  {
    key: "1",
    status: "Active",
    user: "Piyapol",
    group: "Diamond",
    registerDate: "2021-06-10 15:00",
    firstDeposit: "1000.00 BHT",
  },
  {
    key: "2",
    status: "Active",
    user: "Sakuna",
    group: "Silver",
    registerDate: "2021-06-10 15:30",
    firstDeposit: "100.00 BHT",
  },
  {
    key: "3",
    status: "Active",
    user: "Worawit",
    group: "Gold",
    registerDate: "2021-06-10 16:00",
    firstDeposit: "2000.00 BHT",
  },
  {
    key: "4",
    status: "Active",
    user: "Sutida",
    group: "Free",
    registerDate: "2021-06-10 16:00",
    firstDeposit: "500.00 BHT",
  },
  {
    key: "5",
    status: "Active",
    user: "Weerawit",
    group: "Diamond",
    registerDate: "2021-06-10 16:30",
    firstDeposit: "1000.00 BHT",
  },
  {
    key: "6",
    status: "Active",
    user: "Somchai",
    group: "Free",
    registerDate: "2021-06-10 17:00",
    firstDeposit: "800.00 BHT",
  },
  {
    key: "7",
    status: "Active",
    user: "Narudee",
    group: "Silver",
    registerDate: "2021-06-10 17:30",
    firstDeposit: "1000.00 BHT",
  },
  {
    key: "8",
    status: "Active",
    user: "Neeranut",
    group: "Diamond",
    registerDate: "2021-06-10 18:00",
    firstDeposit: "200.00 BHT",
  },
  {
    key: "9",
    status: "Active",
    user: "Autsawin",
    group: "Diamond",
    registerDate: "2021-06-10 15:00",
    firstDeposit: "1000.00 BHT",
  },
  {
    key: "10",
    status: "Active",
    user: "Lapiz",
    group: "Silver",
    registerDate: "2021-06-10 15:30",
    firstDeposit: "100.00 BHT",
  },
  {
    key: "11",
    status: "Active",
    user: "Veera",
    group: "Gold",
    registerDate: "2021-06-10 16:00",
    firstDeposit: "2000.00 BHT",
  },
  {
    key: "12",
    status: "Active",
    user: "Kamsing",
    group: "Free",
    registerDate: "2021-06-10 16:00",
    firstDeposit: "500.00 BHT",
  },
  {
    key: "13",
    status: "Active",
    user: "Monnat",
    group: "Diamond",
    registerDate: "2021-06-10 16:30",
    firstDeposit: "1000.00 BHT",
  },
  {
    key: "14",
    status: "Active",
    user: "Somsree",
    group: "Free",
    registerDate: "2021-06-10 17:00",
    firstDeposit: "800.00 BHT",
  },
  {
    key: "15",
    status: "Active",
    user: "Aom",
    group: "Silver",
    registerDate: "2021-06-10 17:30",
    firstDeposit: "1000.00 BHT",
  },
  {
    key: "16",
    status: "Active",
    user: "Natthew",
    group: "Diamond",
    registerDate: "2021-06-10 18:00",
    firstDeposit: "200.00 BHT",
  },
];

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const memberList: React.FC = () => {
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
        <PageHeader
          className="pt-0 pb-0"
          style={{
            background: "#F0F0F0",
          }}
        >
          <div className="flex justify-between">
            <Menu
              mode="horizontal"
              style={{
                margin: "-10px 0 0 0",
                background: "#F0F0F0",
                fontSize: "16px",
                color: "#001529",
              }}
            >
              <Menu.Item key="1">Customer Service</Menu.Item>
              <Menu.Item key="2">Marketing</Menu.Item>
            </Menu>
            <div className="flex">
              <BellOutlined
                style={{
                  margin: "2px 1px",
                  padding: "0 24px 2px",
                  fontSize: "150%",
                }}
              />
              <Avatar icon={<UserOutlined />} style={{ margin: "-4px 4px" }} />
              <div className="pt-1 mr-2">Chamoi</div>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <EllipsisOutlined />
                </a>
              </Dropdown>
            </div>
          </div>
        </PageHeader>
        <div className="md:flex justify-between">
          <Breadcrumb
            style={{ margin: "16px 0", padding: "0 24px" }}
            separator=">"
          >
            <Breadcrumb.Item>Member</Breadcrumb.Item>
            <Breadcrumb.Item>Member management</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Button
              style={{ margin: "12px 1px", padding: "0 24px" }}
              type="primary"
              ghost
            >
              Export
            </Button>
            <Button
              style={{ margin: "12px 10px", padding: "0 24px" }}
              type="primary"
              ghost
            >
              Add
            </Button>
          </div>
        </div>
        <Content
          style={{
            padding: "0 8px 2px",
          }}
        >
          <Layout style={{ background: "#F0F0F0", padding: "10px 10px 10px" }}>
            <div className="md:flex">
              <Input
                placeholder="Search"
                allowClear
                suffix={suffix}
                style={{
                  width: "68%",
                  margin: "0 4px",
                }}
              />
              <DatePicker.RangePicker
                style={{
                  width: "28%",
                  margin: "0 4px",
                }}
              />
              <FilterFilled
                style={{
                  width: "4%",
                  padding: "10px 2px 2px",
                }}
              />
            </div>
          </Layout>
          <Table columns={columns} dataSource={data} />
        </Content>
      </Layout>
    </Layout>
  );
};

export default memberList;
