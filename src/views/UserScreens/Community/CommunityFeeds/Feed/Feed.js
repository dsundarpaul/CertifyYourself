import { Button, Card } from "antd";
import React from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
const Feed = ({ author, feedTitle, feedContent }) => {
  
  return (
    <Card
      className="border-2"
      title={feedTitle}
      extra={
        author ? (
          <div>
          <Button  className=""
            icon={<DeleteOutlined />}
          />
          <Button icon={ <EditOutlined />}/>
      
          </div>
        ) : (
          <></>
        )
      }
    >
      {feedContent}
    </Card>
  );
};

export default Feed;
