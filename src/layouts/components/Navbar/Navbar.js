import { MenuOutlined } from "@ant-design/icons";
import { PageHeader } from "@ant-design/pro-layout";
import { Button, Typography } from "antd";
import React from "react";
import SideMenu from "../../../components/NavbarExtra/SideMenu";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../firebase/clientApp";
import d1 from "../../../assets/logo/d1.png";
import NavbarAuthButtons from "./NavbarAuthButtons";
import NavbarContent from "./NavbarContent";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);

  return (
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
      extra={user ? <SideMenu user={user} /> : <NavbarAuthButtons />}
    >
      <NavbarContent />
    </PageHeader>
  );
};

export default Navbar;
