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
  Row,
  Col,
  Select,
  Divider,
  Card,
  Upload,
  Space,
  Form,
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
  EditFilled, UploadOutlined,
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
          {/* begining of content */}
          <div className="min-h-screen">
            <Space className="w-full" direction="vertical">
              <Card className="container mx-auto">
                <p>Personal info</p>
                <Divider />
                <Row gutter={[20, 0]}>
                  <Col span={12}>
                    <Form>
                      <Form.Item>
                        Username
                        <Input placeholder="Type" />
                        First name
                        <Input placeholder="Type" />
                        ID card number
                        <Input placeholder="Type" />
                        Phone number
                        <Input placeholder="Type" />
                        Line
                        <Input placeholder="Type" />
                        First login Date / Time
                        <Input placeholder="Type" />
                      </Form.Item>
                    </Form>
                  </Col>
                  <Col span={12}>
                    <Form>
                      <Form.Item>
                        Password
                        <Input placeholder="Type" />
                        Last name
                        <Input placeholder="Type" />
                        <div className="flex">
                          <Row className="mr-2">
                            <p>Gender</p>
                            <Input.Group compact>
                              <Select defaultValue="Option1 " className="w-full">
                                <Option value="Option1">Male</Option>
                                <Option value="Option2">Female</Option>
                                <Option value="Option3">LGBT</Option>
                              </Select>
                            </Input.Group>
                          </Row>
                          <Row className="mr-2">
                            <p>DOB</p>
                            <Input.Group compact>
                              <DatePicker />
                            </Input.Group>
                          </Row>
                          <Row className="w-full mr-2">
                            <p>Age</p>
                            <Input />
                          </Row>
                        </div>
                        Email
                        <Input placeholder="Type" />
                        Created by
                        <Input placeholder="Type" />
                        First login IP address
                        <Input placeholder="Type" />
                      </Form.Item>
                      <br />
                      <Form.Item>
                        <Row className="flex justify-end">
                          <Button type="primary" ghost>
                            Update
                          </Button>
                        </Row>
                      </Form.Item>
                    </Form>
                  </Col>
                </Row>
              </Card>
              {/* <Card className="container mx-auto">
                <p>Emergency contact</p>
                <Divider />
                <Row gutter={[20, 0]}>
                  <Col span={12}>
                    <p>Address</p>
                    <Input placeholder="Type" />
                    <p>Phone number</p>
                    <Input placeholder="Type" />
                    <p>Address</p>
                    <Input placeholder="Type" />
                    <p>Phone number</p>
                    <Input placeholder="Type" />
                  </Col>
                  <Col span={12}>
                    <p>Relation</p>
                    <Input.Group compact>
                      <Select defaultValue="Type" className="w-full">
                        <Option value="Option1">Option1</Option>
                        <Option value="Option2">Option2</Option>
                      </Select>
                    </Input.Group>
                    <br />
                    <br />
                    <p className="mt-2.5">Relation</p>
                    <Input.Group compact>
                      <Select defaultValue="Type" className="w-full">
                        <Option value="Option1">Option1</Option>
                        <Option value="Option2">Option2</Option>
                      </Select>
                    </Input.Group>
                    <br />
                    <br />
                    <div className="flex justify-end">
                      <br />
                      <Button type="primary" ghost>
                        Update
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card className="container mx-auto">
                <p>Payroll</p>
                <Divider />
                <Row gutter={[20, 0]}>
                  <Col span={12}>
                    <p>Relation</p>
                    <Input.Group compact>
                      <Select defaultValue="Type" className="w-full">
                        <Option value="Option1">Option1</Option>
                        <Option value="Option2">Option2</Option>
                      </Select>
                    </Input.Group>
                    <p>Address</p>
                    <Input placeholder="Type" />
                  </Col>
                  <Col span={12}>
                    <p>Bank account</p>
                    <Input placeholder="Type" />
                    <br />
                    <br />
                    <div className="flex justify-end">
                      <br />
                      <Button type="primary" ghost>
                        Update
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
              <Card className="container mx-auto">
                <p>Transcript</p>
                <Divider />
                <Space className="w-full" direction="vertical">
                  <p>สำเนาบัตรประชาชน</p>
                  <Card>
                    <Upload className="flex justify-between">
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Card>
                  <p>เอกสารการศึกษา</p>
                  <Card>
                    <Upload className="flex justify-between">
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Card>
                  <p>เอกสารการเกณฑ์ทหาร</p>
                  <Card>
                    <Upload className="flex justify-between">
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Card>
                  <p>ประวัติอาชญากรรม</p>
                  <Card>
                    <Upload className="flex justify-between">
                      <Button icon={<UploadOutlined />}>Upload</Button>
                    </Upload>
                  </Card>
                </Space>
                <br />
                <br />
                <div className="flex justify-end">
                  <br />
                  <Button type="primary" ghost>
                    Update
                  </Button>
                </div>
              </Card> */}
            </Space>
          </div>
        {/* End of content */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default memberInfo;
