import React, { useState } from "react";

import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Drawer, Menu } from "antd";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/clientApp";
import { SIDENAV } from "../../navigations/vertical/index";
import TabNavButton from "../TabNavButton/index";
import { useDispatch, useSelector } from "react-redux";
import {
  closeTheSideDrawer,
  openTheSideDrawer,
} from "../../store/global-state/actions";
import { logoutFirebaseUser } from "../../store/auth/actions";
import { useNavigate } from "react-router";

const SideMenu = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [signOut, loading, error] = useSignOut(auth);

  const open = useSelector((state) => state.global.drawerState);

  const logoutUser = (dispatch) => async () => {
    const success = await signOut(auth);
    if (success) {
      navigate("/login");
      dispatch(logoutFirebaseUser());
    }
    dispatch(closeTheSideDrawer());
  };

  if (error) {
    alert(error);
  }

  const showDrawer = () => dispatch(openTheSideDrawer());
  const closeDrawer = () => dispatch(closeTheSideDrawer());

  return (
    <div className="flex items-center">
      <div className="mr-4 grid">
        <p
          className={`text-gray-600 mb-4 font-semibold d-flex justify-content-center align-items `}
        >
          {user.email}
        </p>
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
        onClose={closeDrawer}
        open={open}
        width="max-content"
        footer={
          <div>
            <Button
              className="w-full"
              type="primary"
              danger
              icon={<LogoutOutlined />}
              loading={loading}
              onClick={logoutUser()}
            >
              Logout
            </Button>
          </div>
        }
      >
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
