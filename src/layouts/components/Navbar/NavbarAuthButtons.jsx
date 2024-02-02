import { Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const NavbarAuthButtons = () => {
  return (
    <div>
      <Input type="text" className="header-input" />
      <Input type="password" className="header-input" />
      <Link
        to={"/login"}
        className="p-2 px-3 border-2 border-slate-500 rounded-md hover:scale-150 "
        type="primary"
        color="primary"
      >
        Login
      </Link>
      <Link to={"/signup"} className="p-2 px-3" type="link" color="primary">
        SignUp
      </Link>
    </div>
  );
};

export default NavbarAuthButtons;
