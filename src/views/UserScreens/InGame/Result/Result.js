import React from "react";
import { Button, Result, Progress } from "antd";

const ResultScreen = () => {
  const name = "Ankara Messi";
  const rank = "Radiant";
  const userID = "001";
  const progress = 75; // Assuming the progress value is between 0 and 100

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ flex: 1 }}>
        <Result
          status="success"
          subTitle={
            <div style={{ fontSize: "24px" }}>{` User ID : ${userID} | Name -  ${name} | Rank : ${rank}`}</div>
          }
        />
        <Progress percent={progress} status={progress >= 0 ? "active" : "exception"} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Button style={{ marginTop: "20px" }}>Home</Button>
      </div>
    </div>
  );
};

export default ResultScreen;