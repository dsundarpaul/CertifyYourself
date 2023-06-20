import { Card, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../../../../firebase/clientApp";
import { useUserDetails } from "../../../../../../hooks/useUserDetails";

const UserDetails = () => {

  const [user] = useAuthState(auth);
  const [userDetails, setUserDetails] = useState([]);

  const getDetails = (data) => setUserDetails(data);

  useEffect(() => {
    useUserDetails(getDetails, user?.uid);
  }, [user?.uid]);

  

  return (
    <div>
      <Card className="bg-yellow-100" >
        <Typography.Title level={3}>{userDetails?.userName}</Typography.Title>
        {userDetails?.rank || "unranked"}

        <Typography>Total Test Given:</Typography>

        <Typography>Total Contributes:</Typography>

        <Typography>Last Visit</Typography>

        <Typography>Registered</Typography>

        <Typography>{userDetails.userCountry}</Typography>
        <Typography>{userDetails.userName}</Typography>
        <Typography>{userDetails.userPhoneNumber}</Typography>
        <Typography>{userDetails.userSchoolOrUni}</Typography>
        <Typography>{userDetails.userState}</Typography>
      </Card>
    </div>
  );
};

export default UserDetails;
