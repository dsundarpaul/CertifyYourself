import React, { useState } from "react";
import {
  Button,
  Menu,
  Drawer,
  Dropdown,
  Layout,
  Spin,
  Typography,
  Input,
} from "antd";
import { PageHeader } from "@ant-design/pro-layout";

import {
  MenuOutlined,
  CommentOutlined,
  CalendarOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import MainSidePanelMenu from "../components/MainSidePanelMenu";
import { useSelector } from "react-redux";

import packageJson from "../../../package.json";
import "./UserLayoutStyles.css";
import d1 from "../../assets/logo/d1.png";
import PropTypes from "prop-types";
import SideMenu from "../../components/NavbarExtra/SideMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";

const { Content, Footer } = Layout;

const UserLayout = ({ children }) => {
  const navigate = useNavigate();

  const blockUi = useSelector((state) => state.common.blockUi);

  const [user, loading, error] = useAuthState(auth);

  const [drawer, setDrawer] = useState(false);
  // const [user, loading, error] = useAuthState(auth);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {blockUi && (
        <div
          style={{ zIndex: 99 }}
          onClick={() => null}
          className="full-page-spinner"
        >
          <Spin style={{ marginTop: "50vh" }} />
        </div>
      )}

      <Drawer
        className="main-sider"
        title={<img src="" alt="bigimg" className="img-fluid" />}
        // theme="light"
        // id="components-layout-demo-side"
        placement="left"
        width={220}
        onClose={() => setDrawer(false)}
        open={drawer}
        bodyStyle={{ padding: 0 }}
      >
        <MainSidePanelMenu />
      </Drawer>

      <Layout className="site-layout">
        <PageHeader
          className="admin-layout-header"
          title={
            <div className="md:hidden block">
              <Button
                onClick={() => setDrawer(true)}
                shape="circle"
                type="transparent"
                icon={<MenuOutlined />}
              />
            </div>
          }
          subTitle={
            <div className="header-logo">
              <img
                src={d1}
                alt="adminlogo"
                className="md:hidden block w-44 m-auto"
              />
              <Typography.Title level={5}>CertifyYourself</Typography.Title>
            </div>
          }
          extra={
            user ? (
              <SideMenu user={user} />
            ) : (
              <div>
                <Input type="text" className="header-input" />
                <Input type="password" className="header-input" />
                <Button
                  className="header-btn header-btn-login"
                  type="primary"
                  color="primary"
                >
                  Login
                </Button>
                <Button className="header-btn" type="link" color="primary">
                  SignUp
                </Button>
              </div>
            )
          }
        >
          <div className="max-md:hidden absolute top-0 left-1/2 translate-x-[-50%] h-full">
            <Button
              onClick={() => {
                navigate("/feed");
              }}
              className="p-3 text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 "
            >
              <CommentOutlined />
            </Button>
            <Button
              onClick={() => {
                navigate("/events");
              }}
              className="p-3 text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 "
            >
              <CalendarOutlined />
            </Button>
            <Button
              onClick={() => {
                navigate("/home");
              }}
              className="p-3 px-10 text-2xl bg-transparent border-transparent h-full"
            >
              Home
            </Button>
            <Button
              onClick={() => {
                navigate("/career");
              }}
              className="p-3 text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 "
            >
              🎖️
            </Button>
            <Button
              onClick={() => {
                navigate("/store");
              }}
              className="p-3 text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 "
            >
              <ShoppingCartOutlined />
            </Button>
          </div>
        </PageHeader>

        <Content className="main-content p-4">
          <div>{children}</div>
        </Content>

        <Footer className="footer">
          <p className="text-gray-400 mb-0">v {packageJson.version}</p>
        </Footer>
      </Layout>
    </Layout>
  );
};

UserLayout.prototype = {
  children: PropTypes.node.isRequired,
};

export default UserLayout;
