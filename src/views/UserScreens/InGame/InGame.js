import React from "react";
import "./InGameStyles.css"
import { Button, Col, Row, Space } from "antd";
import { Typography } from "antd";
const { Title } = Typography;
const InGame = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="h-2/3 w-2/3">
        <div className="flex items-center justify-center">
          <Title>Question</Title>
        </div>
        <div className="h-2/3 w-full flex justify-center items-center">
          <Row gutter={[0, 60]}>
            <Col className=" flex justify-center items-center" xs={24} md={12}>
              <Button className="option-btn">
                Option 1
              </Button>
            </Col>
            <Col className=" flex justify-center items-center" xs={24} md={12}>
              <Button className="option-btn">
                Option 2
              </Button>
            </Col>
            <Col className=" flex justify-center items-center" xs={24} md={12}>
              <Button className="option-btn">
                Option 3
              </Button>
            </Col>
            <Col className=" flex justify-center items-center" xs={24} md={12}>
              <Button className="option-btn">
                Option 4
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default InGame;
