import { Button } from "antd";
import Typography from "antd/es/typography/Typography";
import React from "react";
import { useNavigate } from "react-router";
import "./UserHomeStyles.css";
import { useSelector } from "react-redux";
import HeroContent from "./HeroContent";

const UserHome = () => {
  console.log(useSelector((state) => state));

  return (
    <div className="userHome-main">
      <HeroContent />
    </div>
  );
};

export default UserHome;
