import React from "react";
// import { Layout } from 'antd'
import "./GuestLayoutStyles.css";

// const Content
const GuestLayout = ({ children }) => {
  return (
    // <Layout.Content>
    // <div className="guest-layout-header bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
    <div className="guest-layout-header bg-gradient-to-r from-gray-100 to-gray-300">
      {children}
    </div>
    // </Layout.Content>
  );
};

export default GuestLayout;
