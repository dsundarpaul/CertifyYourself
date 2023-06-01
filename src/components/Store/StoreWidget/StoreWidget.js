import React from "react";
import { Card } from "antd";
const StoreWidget = () => {
  return (
    <div className="flex justify-around items-center h-screen ">
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 300,
          width: 300,
        }}
      >
        <p className="text-center">Card content 1</p>
      </Card>

      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 300,
          width: 300,
        }}
      >
        <p style={{ textAlign: "center" }}>Card content 1</p>
      </Card>

      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 300,
          width: 300,
        }}
      >
        <p>Card content 1</p>
      </Card>
    </div>
  );
};

export default StoreWidget;
