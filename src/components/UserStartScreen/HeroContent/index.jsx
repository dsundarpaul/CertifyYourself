import { Avatar, Button, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import "./styles.css";
import { io } from "socket.io-client";

const HeroContent = () => {
  const navigate = useNavigate();

  const socket = io();

  const username = "admin";
  const handle = () => {
    console.log("start clicked");
    // socket.emit("JoinGame", { username });
  };

  return (
    <div className="w-full h-[500px] flex justify-center items-center">
      <div className="w-full">
        <div className="w-full flex translate-y-[60px]">
          <Typography className="w-full flex justify-center text-2xl font-medium border-b-2">
            NAME
          </Typography>
          <Typography className="w-full flex justify-center text-2xl font-medium border-b-2">
            RANK
          </Typography>
        </div>
        <div className="w-full flex justify-center">
          <Button
            className="hero-button"
            // onClick={() => navigate('/started')}
            onClick={() => handle()}
          >
            START
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
