import React, { useState } from "react";
import { Drawer, Layout, Spin } from "antd";

import MainSidePanelMenu from "../components/MainSidePanelMenu";
import { useSelector } from "react-redux";

import packageJson from "../../../package.json";
import "./UserLayoutStyles.css";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar/Navbar";

const { Content, Footer } = Layout;

const UserLayout = ({ children }) => {
  const blockUi = useSelector((state) => state.common.blockUi);

  const [drawer, setDrawer] = useState(false);

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
        <Navbar />
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
