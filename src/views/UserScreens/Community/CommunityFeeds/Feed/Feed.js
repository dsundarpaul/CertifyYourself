import { Button, Card, Popconfirm } from "antd";
import React from "react";
import {
  DeleteOutlined,
  EditOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router";
import { kebabCase } from "lodash";

const Feed = ({ author, isAuthor, feedTitle, feedContent }) => {
  const navigate = useNavigate();
  const handleDeleteConfirm = () => {};

  const navigateTo = () => {
    console.log("helllooo")
    const communitFeed_uid = encodeURI(kebabCase(feedTitle));
    navigate(`/feed-edit/${communitFeed_uid}`);
  };

  return (
    <Card
      className="border-2"
      title={feedTitle}
      extra={
        isAuthor ? (
          <div className="ml-4">
            <Popconfirm
              title="Delete your feed"
              description="Are you sure to delete this feed?"
              icon={<QuestionCircleOutlined style={{ color: "red" }} />}
              onConfirm={handleDeleteConfirm}
              // onCancel={cancel}
              okText="Yes"
              cancelText="No"
            >
              <Button className="mr-2" danger icon={<DeleteOutlined />} />
            </Popconfirm>
            <Button onClick={navigateTo()} icon={<EditOutlined />} />
          </div>
        ) : (
          <></>
        )
      }
    >
      {author} :{feedContent}
    </Card>
  );
};

export default Feed;
