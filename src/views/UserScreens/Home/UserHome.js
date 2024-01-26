import React from "react";
import { useNavigate } from "react-router";
import "./UserHomeStyles.css";
import { useSelector } from "react-redux";
import HeroContent from "../../../components/UserStartScreen/HeroContent";

const UserHome = () => {
  const navigate = useNavigate();

  const handleOnStart = () => {
    navigate("/subjects");
  };

  console.log(useSelector((state) => state));

  return (
    <div className="userHome-main">
      <HeroContent />
    </div>
  );
};

export default UserHome;
