import React from "react";
import { Card, Row, Col } from "antd";

const StoreWidget = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      <Card
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 375,
          width: "100%",
          borderWidth: 10,
          marginBottom: 20, // Add margin bottom to create a gap
          position: "relative", // Add relative positioning for pseudo-elements
        }}
      >
        <p className="text-center">Main Card 1</p>
        <div
          className="diagonal-lines"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflow: "hidden",
          }}
        >
          <div
            className="diagonal-line"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50%",
              borderBottom: "10px solid #000",
              transform: "skewX(-45deg)",
            }}
          />
          <div
            className="diagonal-line"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              borderBottom: "10px solid #000",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="diagonal-line"
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "50%",
              borderTop: "10px solid #000",
              transform: "skewX(45deg)",
            }}
          />
          <div
            className="diagonal-line"
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              width: "50%",
              borderTop: "10px solid #000",
              transform: "skewX(-45deg)",
            }}
          />
        </div>
      </Card>

      {<Row gutter={[16, 16]} justify="start" style={{ width: "100%" }}>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 225,
              borderWidth: 10,
            }}
          >
            <p className="text-center">Card content 1</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 225,
              borderWidth: 10,
            }}
          >
            <p style={{ textAlign: "center" }}>Card content 2</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 225,
              borderWidth: 10,
            }}
          >
            <p>Card content 3</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Card
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 225,
              borderWidth: 10,
            }}
          >
            <p style={{ textAlign: "center" }}>Card content 4</p>
          </Card>
        </Col>
      </Row>}
    </div>
  );
};

export default StoreWidget;
