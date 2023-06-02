import React, { useState } from "react";
import { USER_LOGOUT } from "../../store/auth/types";

import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { useNavigate } from "react-router";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import SideMenuItems from "./SideMenuItems/SideMenuItems";
import { SIDENAV } from "../../navigations/vertical/index";
import TabNavButton from "../TabNavButton/index";
const SideMenu = ({ user }) => {
  const navigate = useNavigate();

  const [signOut, loading, error] = useSignOut(auth);

  const openProfile = () => {
    navigate("/profile");
  };
  const doLogout = () => {
    navigate("/login");
  };

  const handleMenuClick = (e) => {
    if (e.key === "1") {
      openProfile();
    }
    if (e.key === "2") {
      doLogout();
    }
  };

  // const navigateToChangePassword = (() => navigate('/change-password'))
  const logoutUser = (dispatch) => async () => {
    const success = await signOut(auth);
    if (success) {
      alert("Your are signed out");
      dispatch({
        type: USER_LOGOUT,
      });
    }
  };

  if (error) {
    alert(error);
  }

  const menu__items = [
    {
      label: "View Profile",
      key: "1",
      icon: <UserOutlined />,
    },
    {
      label: "Log out",
      key: "2",
      icon: <LogoutOutlined />,
      onClick: logoutUser,
    },
  ];

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="flex items-center">
      <div className="mr-4 grid">
        <p className={`text-gray-600 mb-0 font-semibold`}>{user.email}</p>
        {/* <p style={{ lineHeight: '10px' }} className={`text-gray-400 mb-0`}>{userData.user.role}</p> */}
      </div>

      <Button
        shape="square"
        type="dashed"
        coloe="primary"
        icon={<UserOutlined />}
        onClick={showDrawer}
      />

      <Drawer
        placement="right"
        onClose={onClose}
        open={open}
        width="max-content"
        footer={
          <div>
            <Button className="w-full" danger>
              Logout
            </Button>
          </div>
        }
      >
        {/* <SideMenuItems /> */}
        {SIDENAV.map((item, idx) => {
          return (
            <TabNavButton
              icon={item.icon}
              title={item.title}
              path={item.path}
              key={idx}
            />
          );
        })}
      </Drawer>
    </div>
  );
};

export default SideMenu;
