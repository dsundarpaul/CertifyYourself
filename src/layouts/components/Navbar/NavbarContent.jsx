import {
  CalendarOutlined,
  CommentOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const NavbarContent = () => {
  const navigate = useNavigate();

  return (
    <div className="max-md:hidden absolute top-0 left-1/2 translate-x-[-50%] h-full">
      <Button
        onClick={() => {
          navigate("/feed");
        }}
        className="text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 !hover:border-transparent"
      >
        <CommentOutlined />
      </Button>
      <Button
        onClick={() => {
          navigate("/events");
        }}
        className="text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 "
      >
        <CalendarOutlined />
      </Button>
      <Button
        onClick={() => {
          navigate("/home");
        }}
        className="px-10 text-2xl bg-transparent border-transparent h-full"
      >
        Home
      </Button>
      <Button
        onClick={() => {
          navigate("/career");
        }}
        className="text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 "
      >
        🎖️
      </Button>
      <Button
        onClick={() => {
          navigate("/store");
        }}
        className="text-2xl bg-transparent border-transparent h-full hover:bg-slate-200 "
      >
        <ShoppingCartOutlined />
      </Button>
    </div>
  );
};

export default NavbarContent;
