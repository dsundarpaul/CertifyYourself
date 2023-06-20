import { Card, Typography } from "antd";
import React from "react";

const UserDetails = () => {
  return (
    <div>
      <Card className="bg-yellow-100">
        {/* <Typography.Title level={3}>{userData?.userName}</Typography.Title>
        {userData?.rank || "unranked"} */}

        <Typography>Total Test Given:</Typography>

        <Typography>Total Contributes:</Typography>

        <Typography>Last Visit</Typography>

        <Typography>Registered</Typography>
      </Card>
    </div>
  );
};

export default UserDetails;
