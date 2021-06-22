import React from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Input,
  DatePicker,
  Button,
  Avatar,
  PageHeader,
  Dropdown,
  Form,
  Row,
  Col,
  Select,
  InputNumber,
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
const { Option } = Select;
const suffix = (
  <SearchOutlined
    style={{
      fontSize: 16,
      color: "#BFBFBF",
    }}
  />
);

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

const memberInfo: React.FC = () => {
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
          {/* content */}
          <Form>
            <Row>
              <Col span={12}>
                <Form.Item
                  name={["user", "name"]}
                  label="Name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name={["user", "url"]} label="URL">
                  <Input />
                </Form.Item>
              </Col>
            </Row>

            <Row>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please select the type of your device!",
                    },
                  ]}
                >
                  <Select placeholder="Producer">
                    <Option value="producer"> Producer </Option>
                    <Option value="consumer"> Consumer </Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Price">
                  <Form.Item name="price" noStyle>
                    <InputNumber min={0} />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item label="Min balance">
                  <Form.Item name="min-balance" noStyle>
                    <InputNumber min={0} />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item name={["user", "location"]} label="Location">
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="network"
                  label="Network"
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please select the Network",
                    },
                  ]}
                >
                  <Select placeholder="net1">
                    <Option value="net1"> Network 1 </Option>
                    <Option value="net2"> Network 2 </Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                {" "}
                <Form.Item label="Minimum amount">
                  <Form.Item name="min-offer-amount" noStyle>
                    <InputNumber min={0} />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                {" "}
                <Form.Item label="Minimum amount">
                  <Form.Item name="min-offer-amount" noStyle>
                    <InputNumber min={0} />
                  </Form.Item>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              wrapperCol={{
                span: 12,
                offset: 6,
              }}
            >
              <Button shape="round" type="primary" htmlType="submit">
                Add a device
              </Button>

              <Button shape="round" danger>
                Cancel
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
    </Layout>
  );
};

export default memberInfo;
